export interface Project {
  id?: string;
  name: string;
  desc?: string;
  coverImg: string;
  taskLists?: string[]; //列表 Id
  members?: string[]; //成员 Id
}