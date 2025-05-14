'use client'

import { useState } from 'react'

import { Button } from '@/registry/default/ui/button'
import { Label } from '@/registry/default/ui/label'
import { Slider } from '@/registry/default/ui/slider'

export default function Component () {
  const minPrice = 5
  const maxPrice = 1240
  const [value, setValue] = useState([minPrice, maxPrice])

  const formatPrice = (price: number) => {
    return price === maxPrice
      ? `$${price.toLocaleString()}+`
      : `$${price.toLocaleString()}`
  }

  return (
    <div className="*:not-first:mt-3">
      <Label className="tabular-nums">
        From {formatPrice(value[0])} to {formatPrice(value[1])}
      </Label>
      <div className="flex items-center gap-4">
        <Slider
          value={value}
          onValueChange={setValue}
          min={minPrice}
          max={maxPrice}
          aria-label="Price range slider"
        />
        <Button variant="outline">Go</Button>
      </div>
    </div>
  )
}
