'use client'
import type { FC } from 'react'
import React from 'react'
import type { IChatItem } from '../type'
import s from '../style.module.css'

import StreamdownMarkdown from '@/app/components/base/streamdown-markdown'
import ImageGallery from '@/app/components/base/image-gallery'

type IQuestionProps = Pick<IChatItem, 'id' | 'content' | 'useCurrentUserAvatar'> & {
  imgSrcs?: string[]
}

const Question: FC<IQuestionProps> = ({ id, content, useCurrentUserAvatar, imgSrcs }) => {
  const userName = ''
  const userInitial = userName?.[0]?.toLocaleUpperCase() || 'Y'

  return (
    <div key={id} className='group'>
      <div className='flex items-start gap-3'>
        {useCurrentUserAvatar
          ? (
            <div className='mt-0.5 h-9 w-9 shrink-0 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-semibold'>
              {userInitial}
            </div>
          )
          : (
            <div className={`${s.questionIcon} mt-0.5 h-9 w-9 shrink-0 rounded-full`} />
          )}

        <div className='min-w-0 flex-1'>
          <div className='flex items-center gap-2'>
            <div className='text-sm font-semibold text-slate-900'>You</div>
            <div className='text-xs text-slate-400'>•</div>
            <div className='text-xs text-slate-400'>Just now</div>
          </div>

          <div className='mt-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm'>
            {imgSrcs && imgSrcs.length > 0 && (
              <div className='mb-2'>
                <ImageGallery srcs={imgSrcs} />
              </div>
            )}
            <StreamdownMarkdown content={content} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Question)
