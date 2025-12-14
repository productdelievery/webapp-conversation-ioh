import React from 'react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import {
  ChatBubbleOvalLeftEllipsisIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline'
import { ChatBubbleOvalLeftEllipsisIcon as ChatBubbleOvalLeftEllipsisSolidIcon } from '@heroicons/react/24/solid'
import Button from '@/app/components/base/button'
// import Card from './card'
import type { ConversationItem } from '@/types/app'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const MAX_CONVERSATION_LENTH = 20

export interface ISidebarProps {
  copyRight: string
  currentId: string
  onCurrentIdChange: (id: string) => void
  list: ConversationItem[]
}

const Sidebar: FC<ISidebarProps> = ({
  copyRight,
  currentId,
  onCurrentIdChange,
  list,
}) => {
  const { t } = useTranslation()
  return (
    <aside
      className='shrink-0 flex flex-col min-h-0 overflow-y-auto bg-white border-r border-slate-200 w-[84vw] max-w-[320px] tablet:w-[260px] pc:w-[280px] h-full'
      aria-label='Sidebar'
    >
      <div className='sticky top-0 z-10 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200'>
        {list.length < MAX_CONVERSATION_LENTH && (
          <div className='p-3'>
            <Button
              onClick={() => { onCurrentIdChange('-1') }}
              className='group block w-full flex-shrink-0 !justify-start !h-10 text-primary-700 items-center text-sm font-semibold rounded-xl bg-primary-50 hover:bg-primary-100'
            >
              <PencilSquareIcon className='mr-2 h-4 w-4' /> {t('app.chat.newChat')}
            </Button>
          </div>
        )}
      </div>

      <nav className='flex-1 min-h-0 space-y-1 p-2'>
        {list.map((item) => {
          const isCurrent = item.id === currentId
          const ItemIcon = isCurrent ? ChatBubbleOvalLeftEllipsisSolidIcon : ChatBubbleOvalLeftEllipsisIcon
          return (
            <div
              onClick={() => onCurrentIdChange(item.id)}
              key={item.id}
              className={classNames(
                isCurrent
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-700 hover:bg-slate-100',
                'group flex items-center rounded-xl px-3 py-2.5 text-sm font-medium cursor-pointer transition-colors',
              )}
            >
              <ItemIcon
                className={classNames(
                  isCurrent
                    ? 'text-white'
                    : 'text-slate-400 group-hover:text-slate-600',
                  'mr-3 h-5 w-5 flex-shrink-0',
                )}
                aria-hidden='true'
              />
              <span className='line-clamp-1'>{item.name}</span>
            </div>
          )
        })}
      </nav>

      <div className='border-t border-slate-200 p-4'>
        <div className='text-slate-400 text-xs'>© {copyRight} {(new Date()).getFullYear()}</div>
      </div>
    </aside>
  )
}

export default React.memo(Sidebar)
