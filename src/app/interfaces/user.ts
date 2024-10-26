export interface User {
  id?: string;
  name: string;
  email: string;
  sector: string;
  role: string;
  healthPlan?: string;
  dentalPlan?: string;
}
