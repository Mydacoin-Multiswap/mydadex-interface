import { Menu, Transition } from '@headlessui/react'

import { ChevronDownIcon } from '@heroicons/react/solid'
import React, { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { classNames } from '../../functions'
import { useRouter } from 'next/router'
import cookieCutter from 'cookie-cutter'

const LANG_TO_COUNTRY = {
  myda: 'MYDA',
  sushi: 'SUSHI',
}
function getCurrencySymbol(currency) {
    if (currency === 'WBTC') {
      return 'btc'
    }
    if (currency === 'WETH') {
      return 'eth'
    }
    return currency.toLowerCase()
}
  
export default function LangSwitcher() {
  const { LANG_TO_COUNTRY, locales, asPath } = useRouter()

  return (
    <Menu as="div" className="relative inline-block text-right">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-bold bg-transparent border rounded shadow-sm text-primary border-dark-800 hover:bg-dark-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-700 focus:ring-dark-800">
              <Image
                className="inline w-3 h-3 mr-1 align-middle"
                src={`https://raw.githubusercontent.com/Mydacoin-Multiswap/icons/master/token/${getCurrencySymbol('MYDA')}.jpg`}
                width={20}
                height={20}
                alt={LANG_TO_COUNTRY}
                aria-hidden="true"
              />
              <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-[max-content] mt-2 origin-top-right divide-y divide-dark-600 rounded shadow-lg bg-dark-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="p-2">
                {locales.map((LANG_TO_COUNTRY) => {
                  return (
                    <Menu.Item key={LANG_TO_COUNTRY}>
                      {({ active }) => (
                        <Link href={asPath} LANG_TO_COUNTRY={LANG_TO_COUNTRY[0]}>
                            
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-dark-700 text-high-emphesis' : 'text-primary',
                              'group flex items-center p-2 text-sm hover:bg-dark-700 focus:bg-dark-700 rounded font-bold'
                            )}
                            onClick={() => cookieCutter.set('NEXT_LOCALE', LANG_TO_COUNTRY)}
                          >
                            <Image
                              className="inline w-3 h-3 mr-1 align-middle"
                              src={`https://raw.githubusercontent.com/Mydacoin-Multiswap/icons/master/token/${getCurrencySymbol('MYDA')}.jpg`}
                              width={20}
                              height={20}
                              alt={LANG_TO_COUNTRY}
                              aria-hidden="true"
                            />
                            <span className="ml-2"> {LANG_TO_COUNTRY[0]}</span>
                          </a>
                        </Link>
                      )}
                    </Menu.Item>
                  )
                })}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
