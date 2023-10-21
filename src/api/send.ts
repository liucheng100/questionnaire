import http from "@/utils/request";

export function postSurvey<T>(data: any) {
  return http.post<T>({
    url: "/post",
    data: data,
  });
}
