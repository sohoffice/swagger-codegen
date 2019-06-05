
export type FormParams = { append(param: string, value: any): void; };

export function appendMutateFormParams(formParams: { append(param: string, value: any): void; }, param: string, value: any): FormParams {
  formParams.append(param, value);
  return formParams;
}

