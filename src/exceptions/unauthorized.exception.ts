import HttpException from '@exceptions/http.exception'
import { UNAUTHORIZED } from '@constants/http.status.code'

export default class UnauthorizedException extends HttpException {
  constructor(message = 'Unauthorized Exception', status = UNAUTHORIZED) {
    super(message, status)
    this.name = 'UnauthorizedException'
  }
}
