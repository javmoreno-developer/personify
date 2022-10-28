export interface Assignment {
    id: number;
    personId: number;
    taskId: number;
    createdAt: string; // ISO 8601 YYYY-MM-DDTHH:mm:ss+HH+MM  2022-10-20T10:40:00+2:00
    dateTime: string; // ISO 8601 YYYY-MM-DDTHH:mm:ss+HH+MM   2022-10-20T10:40:00+2:00
}
