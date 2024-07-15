'use client';

import React from 'react';
import CustomAvatar from '@/components/custom-avatar';
import { COMPANIES_LIST_QUERY } from '@/graphql/queries';
import { SearchOutlined } from '@ant-design/icons';
import { CreateButton, DeleteButton, EditButton, FilterDropdown, List, useTable } from '@refinedev/antd';
import { HttpError, getDefaultFilter, useGo } from '@refinedev/core';
import { Input, Space, Table } from 'antd';
import { Text } from '@/components/text';
import { currencyNumber } from '@/utilities';
import { GetFieldsFromList } from '@refinedev/nestjs-query';
import { CompaniesListQuery } from '@/graphql/types';


export default function CompanyList({ children }: React.ReactNode) {
  const go = useGo();
  const { tableProps, filters } = useTable<
    GetFieldsFromList<CompaniesListQuery>,
    HttpError,
    GetFieldsFromList<CompaniesListQuery>
  >({
    resource: 'companies',
    onSearch: (values) => {
      return [
        {
          field: 'name',
          operator: 'contains',
          value: values.name
        }
      ]
    },
    pagination: {
      pageSize: 12
    },
    sorters: {
      initial: [
        {
          field: "createdAt",
          order: "desc",
        },
      ],
    },
    filters: {
      initial: [
        {
          field: "name",
          operator: "contains",
          value: undefined,
        },
      ],
    },
    meta: {
      gqlQuery: COMPANIES_LIST_QUERY
    }
  })

  return (
    <div className="page-container">
      <List
        breadcrumb={false}
        headerButtons={() => (
          <CreateButton
            onClick={() => {
              go({
                to: {
                  resource: 'companies',
                  action: 'create'
                },
                options: {
                  keepQuery: true
                },
                type: 'replace'
              })
            }}
          />
        )}
      >
        <Table
          {...tableProps}
          pagination={{...tableProps.pagination}}
        >
          <Table.Column
            dataIndex='name'
            title='Company Title'
            defaultFilteredValue={getDefaultFilter('id', filters)}
            filterIcon={<SearchOutlined/>}
            filterDropdown={(props) => (
              <FilterDropdown {...props}>
                <Input placeholder='Search Company'/>
              </FilterDropdown>
            )}
            render={(value, record: any) => (
              <Space>
                <CustomAvatar shape='square' name={record.name} src={record.avatarUrl}/>
                <Text
                  style={{
                    whiteSpace: 'nowrap'
                  }}
                >
                {record.name}
                </Text>
              </Space>
            )}
          />

          <Table.Column
            dataIndex='totalRevenue'
            title='Open deals amount'
            render={(value, company: any) => (
              <Text
                style={{
                  whiteSpace: 'nowrap'
                }}
              >
              {currencyNumber(company?.dealsAggregate?.[0].sum?.value || 0)}
              </Text>
            )}
          />
          
          <Table.Column
            dataIndex='id'
            title='Action'
            fixed='right'
            render={(value) => (
              <Space>
                <EditButton hideText size='small' recordItemId={value}/>
                <DeleteButton hideText size='small' recordItemId={value}/>
              </Space>
            )}
          />
        </Table>
      </List>
      {children}
    </div>
  )
}
