'use client'

import { RiSearch2Line } from '@remixicon/react'

import { useId, useState } from 'react'
import { CheckIcon, ChevronDownIcon } from 'lucide-react'

import { cn } from '@/registry/default/lib/utils'
import { Button } from '@/registry/default/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/registry/default/ui/command'
import { Label } from '@/registry/default/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/registry/default/ui/popover'

const frameworks = [
  {
    value: 'vue',
    label: 'Vue.js'
  },
  {
    value: 'react',
    label: 'React'
  },
  {
    value: 'ember',
    label: 'Ember.js'
  },
  {
    value: 'gatsby',
    label: 'Gatsby'
  },
  {
    value: 'eleventy',
    label: 'Eleventy'
  },
  {
    value: 'solid',
    label: 'SolidJS'
  },
  {
    value: 'preact',
    label: 'Preact'
  },
  {
    value: 'qwik',
    label: 'Qwik'
  },
  {
    value: 'alpine',
    label: 'Alpine.js'
  },
  {
    value: 'lit',
    label: 'Lit'
  }
]

export default function SearchComponent () {
  const id = useId()
  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  return (
    <div className="*:not-first:mt-2">

    </div>
  )
}


export function SearchButton () {
  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')
  return (
    <Command>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div
            className="bg-background text-foreground placeholder:text-muted-foreground/70 focus:border-ring focus:ring-ring/50 inline-flex h-10 w-fit min-w-72 cursor-text rounded-full border px-4 py-2 text-sm outline-none focus:ring-[3px]"
          >
            <span className="flex grow items-center gap-2">
              {/* <input className="font-normal  outline-none" placeholder='Quick search...' /> */}
              <CommandInput placeholder="Search framework..." />
              {/* <SearchComponent /> */}
              {/* </input> */}
              <div className="text-muted-foreground/80 pointer-events-none ml-auto flex items-center justify-center">
                <kbd className="text-muted-foreground inline-flex font-[inherit] text-xs font-medium">
                  <span className="opacity-70">⌘</span>K
                </kbd>
              </div>
            </span>
          </div>
        </PopoverTrigger>
        <PopoverContent
          className="border-input w-full min-w-[var(--radix-popper-anchor-width)] p-0"
          align="start"
        >
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.label}
                  {value === framework.value && (
                    <CheckIcon size={16} className="ml-auto" />
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </PopoverContent>
      </Popover>
    </Command>

  )
}
