import { http, HttpResponse } from 'msw'

import { API_URL } from '@/api'

export const handlers = [http.post(API_URL, () => HttpResponse.json({}))]
