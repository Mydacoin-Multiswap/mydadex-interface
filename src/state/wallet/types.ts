import { CurrencyAmount, Token } from 'mydaswapsdk'

type TokenAddress = string

export type TokenBalancesMap = Record<TokenAddress, CurrencyAmount<Token>>
