import {
  EuiBasicTableColumn,
  EuiInMemoryTable,
  EuiProgress,
} from '@elastic/eui';

import { useSRRControllerGetSRRs } from '../../src/__generated__/startrail-api';
import styles from './index.module.css';

/* eslint-disable-next-line */
export interface SrrsProps {}

export function Srrs(props: SrrsProps) {
  const { data: srrs, isLoading } = useSRRControllerGetSRRs();

  const columns: Array<EuiBasicTableColumn<any>> = [
    {
      name: 'Token Id',
      render: (srr: any) => srr.tokenId,
    },
    {
      name: 'Collection Address',
      render: (srr: any) => srr.collection?.id || 'StartrailRegistry',
    },
    {
      name: 'Artist Address',
      render: (srr: any) => srr.artistAddress,
    },
    {
      name: 'Owner Address',
      render: (srr: any) => srr.ownerAddress,
    },
    {
      name: 'Created At',
      render: (srr: any) => srr.createdAt,
    },
    {
      name: 'Updated At',
      render: (srr: any) => srr.updatedAt,
    },
  ];

  const sorting = {
    sort: {
      field: 'tokenId',
      direction: 'asc' as const,
    },
  };

  if (isLoading) {
    return <EuiProgress />;
  }

  console.log(srrs, isLoading);

  return (
    <div className={styles['container']}>
      <h1>SRR List</h1>
      <EuiInMemoryTable
        tableCaption="Demo of EuiInMemoryTable"
        items={srrs || []}
        columns={columns}
        pagination={true}
        sorting={sorting}
      />
    </div>
  );
}

export default Srrs;
