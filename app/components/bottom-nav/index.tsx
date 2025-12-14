'use client'

import type { FC } from 'react'
import React from 'react'
import cn from 'classnames'
import {
  ChatBubbleOvalLeftEllipsisIcon,
  Cog6ToothIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline'

export type BottomNavKey = 'chats' | 'new' | 'settings'

export interface BottomNavProps {
  activeKey: BottomNavKey
  onChange: (key: BottomNavKey) => void
  onNewChat?: () => void
}

const Item: FC<{
  label: string
  active?: boolean
  icon: React.ReactNode
  onClick: () => void
}> = ({ label, active, icon, onClick }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={cn(
        'flex flex-col items-center justify-center gap-1 w-full py-2 rounded-xl transition-colors',
        active ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700',
      )}
      aria-current={active ? 'page' : undefined}
    >
      <span
        className={cn(
          'inline-flex h-10 w-10 items-center justify-center rounded-xl',
          active ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600',
        )}
      >
        {icon}
      </span>
      <span className='text-[11px] font-medium leading-none'>{label}</span>
    </button>
  )
}

const BottomNav: FC<BottomNavProps> = ({
  activeKey,
  onChange,
  onNewChat,
}) => {
  return (
    <nav
      className='fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70'
      aria-label='Bottom navigation'
    >
      <div className='mx-auto max-w-6xl px-3'>
        <div className='grid grid-cols-3 gap-2 py-2'>
          <Item
            label='Chats'
            active={activeKey === 'chats'}
            icon={<ChatBubbleOvalLeftEllipsisIcon className='h-5 w-5' />}
            onClick={() => onChange('chats')}
          />

          <button
            type='button'
            onClick={() => onNewChat?.()}
            className='flex flex-col items-center justify-center gap-1 w-full py-2 rounded-xl'
            aria-label='New chat'
          >
            <span className='inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white shadow-sm'>
              <PlusCircleIcon className='h-5 w-5' />
            </span>
            <span className='text-[11px] font-semibold text-slate-900 leading-none'>New</span>
          </button>

          <Item
            label='Settings'
            active={activeKey === 'settings'}
            icon={<Cog6ToothIcon className='h-5 w-5' />}
            onClick={() => onChange('settings')}
          />
        </div>
      </div>
      <div className='h-[max(env(safe-area-inset-bottom),0px)]' />
    </nav>
  )
}

export default React.memo(BottomNav)
