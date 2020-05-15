export const TABLE_DETAULT_CONTENT = '--';

export enum QStatus {
  DONE = 'DONE',
  TODO = 'TODO',
  ALL = 'ALL',
};

export const QStatusFilter = [
  {
    label: '已完成',
    value: QStatus.DONE,
  },
  {
    label: '未完成',
    value: QStatus.TODO,
  },
  {
    label: '不限',
    value: QStatus.ALL,
  },
];

export enum QWithHelp {
  NO = 'NO',
  YES = 'YES',
  ALL = 'ALL'
};

export const QWithHelpFilter = [
  {
    label: '借助帮助',
    value: QWithHelp.YES,
  },
  {
    label: '独立完成',
    value: QWithHelp.NO,
  },
  {
    label: '不限',
    value: QWithHelp.ALL,
  },
];
