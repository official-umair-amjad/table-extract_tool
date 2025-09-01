export type TableRows = string[][];

export interface EngineResult {
  rows?: TableRows;
  tables?: TableRows[];
}

export interface UploadItem {
  id: string;
  file: File;
  status: 'queued' | 'processing' | 'completed' | 'error';
  tables?: TableRows[];
  error?: string;
}

export interface MockJob {
  jobId: string;
  filename: string;
  mimetype: string;
  status: 'completed';
  rows: TableRows;
}
