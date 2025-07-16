'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface DropdownMenuItem {
  label: string
  href?: string
  onClick?: () => void
  type?: 'item' | 'separator'
  disabled?: boolean
}

interface DropdownMenuProps {
  trigger: React.ReactNode
  items: DropdownMenuItem[]
  align?: 'left' | 'right'
  className?: string
}

export function DropdownMenu({ trigger, items, align = 'right', className }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleItemClick = (item: DropdownMenuItem) => {
    if (item.onClick) {
      item.onClick()
    }
    setIsOpen(false)
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>

      {isOpen && (
        <div
          className={cn(
            'absolute z-50 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
            align === 'right' ? 'right-0' : 'left-0',
            className
          )}
        >
          <div className="py-1">
            {items.map((item, index) => {
              if (item.type === 'separator') {
                return <div key={index} className="border-t border-gray-100 my-1" />
              }

              const content = (
                <div
                  className={cn(
                    'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer',
                    item.disabled && 'opacity-50 cursor-not-allowed'
                  )}
                  onClick={() => !item.disabled && handleItemClick(item)}
                >
                  {item.label}
                </div>
              )

              if (item.href && !item.disabled) {
                return (
                  <Link key={index} href={item.href} onClick={() => setIsOpen(false)}>
                    {content}
                  </Link>
                )
              }

              return <div key={index}>{content}</div>
            })}
          </div>
        </div>
      )}
    </div>
  )
}