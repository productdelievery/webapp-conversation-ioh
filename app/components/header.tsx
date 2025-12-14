import type { FC } from 'react'
import React from 'react'
import {
  Bars3Icon,
  PencilSquareIcon,
} from '@heroicons/react/24/solid'
import AppIcon from '@/app/components/base/app-icon'
export interface IHeaderProps {
  title: string
  isMobile?: boolean
  onShowSideBar?: () => void
  onCreateNewChat?: () => void
}
const Header: FC<IHeaderProps> = ({
  title,
  isMobile,
  onShowSideBar,
  onCreateNewChat,
}) => {
  return (
    <header className='sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60'>
      <div className='mx-auto flex h-14 max-w-6xl items-center justify-between px-3 tablet:px-6'>
        <div className='flex items-center gap-2'>
          {isMobile
            ? (
              <button
                type='button'
                aria-label='Open sidebar'
                className='inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-100 active:bg-slate-200'
                onClick={() => onShowSideBar?.()}
              >
                <Bars3Icon className='h-5 w-5 text-slate-600' />
              </button>
            )
            : (
              <div className='h-10 w-10' />
            )}

          <div className='flex items-center gap-2'>
            <AppIcon size='small' />
            <div className='text-sm font-semibold text-slate-900 line-clamp-1'>{title}</div>
          </div>
        </div>

        {isMobile
          ? (
            <button
              type='button'
              aria-label='Create new chat'
              className='inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-100 active:bg-slate-200'
              onClick={() => onCreateNewChat?.()}
            >
              <PencilSquareIcon className='h-5 w-5 text-slate-600' />
            </button>
          )
          : (
            <div className='h-10 w-10' />
          )}
      </div>
    </header>
  )
}

export default React.memo(Header)
