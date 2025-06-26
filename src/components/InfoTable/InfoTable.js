'use client';

import { Tooltip, Table, Text } from '@mantine/core';
import { IconTable } from '@tabler/icons-react';

export function TableTooltip() {
    const convenios = [
        { orgao: 'Câmara dos deputados', plano: 'Pró-Saúde' },
        { orgao: 'Senado Federal', plano: 'SIS - Servidores' },
        { orgao: 'Senado Federal', plano: 'SIS - Senadores' },
        { orgao: 'TRF 1° Região DF', plano: 'Pro-social' },
        { orgao: 'STF', plano: 'STF MED' },
        { orgao: 'TRT 5° Região BA', plano: 'TRT Saúde' },
        { orgao: 'TST', plano: 'TST' },
    ];

    return (
        <Tooltip
            label={
                // Construa a tabela do Mantine aqui dentro
                <Table withTableBorder withColumnBorders>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>Órgão</Table.Th>
                            <Table.Th>Plano/Programa</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {convenios.map((item) => (
                            <Table.Tr key={item.orgao + item.plano}>
                                <Table.Td>{item.orgao}</Table.Td>
                                <Table.Td>{item.plano}</Table.Td>
                            </Table.Tr>
                        ))}
                    </Table.Tbody>
                </Table>
            }
            position="bottom"
            withArrow
            transitionProps={{ transition: 'slide-up', duration: 200 }}
        >
            <Text component="span" underline>
                Ver Duração dos Serviços
            </Text>
        </Tooltip>
    );
}
export default TableTooltip;