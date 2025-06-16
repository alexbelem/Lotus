// app/api/subscribe/route.js

import { NextResponse } from 'next/server'; // Importa a nova forma de resposta
import mysql from 'mysql2/promise';
import nodemailer from 'nodemailer';

// A função agora é exportada com o nome do método HTTP (POST)
export async function POST(request) {
    try {
        // 1. Pegar o e-mail do corpo da requisição
        const { email } = await request.json();

        // 2. Validação simples do e-mail
        if (!email || !email.includes('@')) {
            return NextResponse.json({ message: 'E-mail inválido.' }, { status: 400 });
        }

        // --- ETAPA DE SALVAR NO BANCO DE DADOS ---
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });

        const query = 'INSERT INTO subscribers (email) VALUES (?)';
        await connection.execute(query, [email]);
        await connection.end();

        // --- ETAPA DE ENVIAR O E-MAIL AUTOMÁTICO ---
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_APP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: '"Clínica Lótus" <seu-email@gmail.com>',
            to: email,
            subject: 'Obrigado por seu contato! | Clínica Lótus',
            html: `
        <h1>Olá!</h1>
        <p>Recebemos o seu contato em nosso site. Obrigado pelo seu interesse!</p>
        <p>Como podemos te ajudar?</p>
        <br>
        <p>Atenciosamente,</p>
        <p>Equipe Clínica Lótus</p>
      `,
        });

        // 3. Retornar sucesso usando NextResponse
        return NextResponse.json({ message: 'Inscrição realizada com sucesso!' }, { status: 200 });

    } catch (error) {
        // Tratamento de erro para o App Router
        console.error(error);
        // Checa se o erro é de e-mail duplicado no banco de dados
        if (error.code === 'ER_DUP_ENTRY') {
            return NextResponse.json({ message: 'Este e-mail já está cadastrado.' }, { status: 409 }); // 409 Conflict
        }
        return NextResponse.json({ message: 'Ocorreu um erro ao processar sua solicitação.' }, { status: 500 });
    }
}