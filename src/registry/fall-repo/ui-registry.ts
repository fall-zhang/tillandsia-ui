import { RegistryTag } from '../registry-tags'

type RegistryItem = {
  name:string
  id:string
  type:'registry:component'
  registryDependencies:string[] // 需要的 shadcn 依赖
  dependencies?:string[] // npm 需要的 dependencies 依赖
  devDependencies?:string[] // npm 需要的 devDependencies 依赖
  entryPath:string
  relativeFiles:{
    path:string
    type: 'component' | 'hook'
  }[]
  // componentEntry:FC
  // files:any
  meta: {
    tags:RegistryTag[]
    style?:1 | 2
    colSpan?: 2 | 3
  }
}

const uiRegistry:RegistryItem[] = [
  {
    name: 'comp-01',
    id: 'comp-01',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    entryPath: 'registry/default/components/comp-01.tsx',
    // relativeFiles: [],
    // entryPath: './ui-comp/input/input-1',
    // componentEntry: (await import('./ui-comp/input/input-1')).default,
    relativeFiles: [],
    meta: {
      tags: [
        'input',
        'label',
      ],
    },
  },
  {
    name: 'comp-02',
    id: 'comp-02',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    entryPath: 'registry/default/components/comp-02.tsx',
    relativeFiles: [],
    meta: {
      tags: [
        'input',
        'label',
        'required',
      ],
    },
  },
  {
    name: 'comp-03',
    id: 'comp-03',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-03.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'helper',
      ],
    },
  },
  {
    name: 'comp-04',
    id: 'comp-04',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-04.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'hint',
      ],
    },
  },
  {
    name: 'comp-05',
    id: 'comp-05',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-05.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
      ],
    },
  },
  {
    name: 'comp-06',
    id: 'comp-06',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-06.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'error',
      ],
    },
  },
  {
    name: 'comp-07',
    id: 'comp-07',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-07.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
      ],
    },
  },
  {
    name: 'comp-08',
    id: 'comp-08',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-08.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'disabled',
      ],
    },
  },
  {
    name: 'comp-09',
    id: 'comp-09',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-09.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
      ],
    },
  },
  {
    name: 'comp-10',
    id: 'comp-10',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-10.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
      ],
    },
  },
  {
    name: 'comp-11',
    id: 'comp-11',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-11.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
      ],
    },
  },
  {
    name: 'comp-12',
    id: 'comp-12',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-12.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
      ],
    },
  },
  {
    name: 'comp-13',
    id: 'comp-13',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-13.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
      ],
    },
  },
  {
    name: 'comp-14',
    id: 'comp-14',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-14.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
      ],
    },
  },
  {
    name: 'comp-15',
    id: 'comp-15',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-15.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
      ],
    },
  },
  {
    name: 'comp-16',
    id: 'comp-16',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-16.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
      ],
    },
  },
  {
    name: 'comp-17',
    id: 'comp-17',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
      'select-native',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-17.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'select',
        'native select',
      ],
    },
  },
  {
    name: 'comp-18',
    id: 'comp-18',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
      'select-native',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-18.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'select',
        'native select',
      ],
    },
  },
  {
    name: 'comp-19',
    id: 'comp-19',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-19.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'button',
      ],
    },
  },
  {
    name: 'comp-20',
    id: 'comp-20',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-20.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'button',
      ],
    },
  },
  {
    name: 'comp-21',
    id: 'comp-21',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-21.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'button',
      ],
    },
  },
  {
    name: 'comp-22',
    id: 'comp-22',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-22.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'button',
      ],
    },
  },
  {
    name: 'comp-23',
    id: 'comp-23',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-23.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'button',
        'password',
      ],
    },
  },
  {
    name: 'comp-24',
    id: 'comp-24',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-24.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'button',
      ],
    },
  },
  {
    name: 'comp-25',
    id: 'comp-25',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-25.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'search',
        'kbd',
      ],
    },
  },
  {
    name: 'comp-26',
    id: 'comp-26',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-26.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'button',
        'search',
      ],
    },
  },
  {
    name: 'comp-27',
    id: 'comp-27',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-27.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'button',
        'search',
      ],
    },
  },
  {
    name: 'comp-28',
    id: 'comp-28',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [],
    dependencies: [
      'react-aria-components',
      'lucide-react',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-28.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'button',
        'number',
        'react aria',
      ],
    },
  },
  {
    name: 'comp-29',
    id: 'comp-29',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [],
    dependencies: [
      'react-aria-components',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-29.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'button',
        'number',
        'react aria',
      ],
    },
  },
  {
    name: 'comp-30',
    id: 'comp-30',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-30.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'file',
      ],
    },
  },
  {
    name: 'comp-31',
    id: 'comp-31',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-31.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
      ],
    },
  },
  {
    name: 'comp-32',
    id: 'comp-32',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-32.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
      ],
    },
  },
  {
    name: 'comp-33',
    id: 'comp-33',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-33.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
      ],
    },
  },
  {
    name: 'comp-34',
    id: 'comp-34',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-34.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-character-limit.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
      ],
    },
  },
  {
    name: 'comp-35',
    id: 'comp-35',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-35.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-character-limit.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
      ],
    },
  },
  {
    name: 'comp-36',
    id: 'comp-36',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'datefield-rac',
    ],
    dependencies: [
      'react-aria-components',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-36.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'date',
        'react aria',
      ],
    },
  },
  {
    name: 'comp-37',
    id: 'comp-37',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'datefield-rac',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-37.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'date',
        'react aria',
      ],
    },
  },
  {
    name: 'comp-38',
    id: 'comp-38',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'datefield-rac',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-38.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'date',
        'react aria',
      ],
    },
  },
  {
    name: 'comp-39',
    id: 'comp-39',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'datefield-rac',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-39.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'date',
        'react aria',
      ],
    },
  },
  {
    name: 'comp-40',
    id: 'comp-40',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'datefield-rac',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-40.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'date',
        'react aria',
      ],
    },
  },
  {
    name: 'comp-41',
    id: 'comp-41',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'calendar-rac',
      'datefield-rac',
    ],
    dependencies: [
      'react-aria-components',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-41.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'date',
        'calendar',
        'picker',
        'react aria',
      ],
    },
  },
  {
    name: 'comp-42',
    id: 'comp-42',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'calendar-rac',
      'datefield-rac',
    ],
    dependencies: [
      'react-aria-components',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-42.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'date',
        'calendar',
        'range calendar',
        'picker',
        'react aria',
      ],
    },
  },
  {
    name: 'comp-43',
    id: 'comp-43',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'calendar-rac',
      'datefield-rac',
    ],
    dependencies: [
      'react-aria-components',
      'react-aria',
      '@internationalized/date',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-43.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'date',
        'calendar',
        'range calendar',
        'picker',
        'react aria',
      ],
    },
  },
  {
    name: 'comp-44',
    id: 'comp-44',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
    ],
    dependencies: [
      'input-otp',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-44.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'otp',
      ],
    },
  },
  {
    name: 'comp-45',
    id: 'comp-45',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
    ],
    dependencies: [
      'input-otp',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-45.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'otp',
      ],
    },
  },
  {
    name: 'comp-46',
    id: 'comp-46',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    dependencies: [
      'react-phone-number-input',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-46.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'phone',
      ],
    },
  },
  {
    name: 'comp-47',
    id: 'comp-47',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    dependencies: [
      'react-payment-inputs',
    ],
    devDependencies: [
      '@types/react-payment-inputs',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-47.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'checkout',
        'payment',
        'credit card',
        'form',
      ],
    },
  },
  {
    name: 'comp-48',
    id: 'comp-48',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    dependencies: [
      'react-payment-inputs',
    ],
    devDependencies: [
      '@types/react-payment-inputs',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-48.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'checkout',
        'payment',
        'credit card',
        'form',
      ],
    },
  },
  {
    name: 'comp-49',
    id: 'comp-49',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    dependencies: [
      'react-payment-inputs',
    ],
    devDependencies: [
      '@types/react-payment-inputs',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-49.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'checkout',
        'payment',
        'credit card',
        'form',
      ],
    },
  },
  {
    name: 'comp-50',
    id: 'comp-50',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    dependencies: [
      'react-payment-inputs',
    ],
    devDependencies: [
      '@types/react-payment-inputs',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-50.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'checkout',
        'payment',
        'credit card',
        'form',
      ],
    },
  },
  {
    name: 'comp-51',
    id: 'comp-51',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-51.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'password',
      ],
    },
  },
  {
    name: 'comp-52',
    id: 'comp-52',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-52.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'read-only',
      ],
    },
  },
  {
    name: 'comp-53',
    id: 'comp-53',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
      'tooltip',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-53.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'copy',
      ],
    },
  },
  {
    name: 'comp-54',
    id: 'comp-54',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    dependencies: [
      'use-mask-input',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-54.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'mask',
      ],
    },
  },
  {
    name: 'comp-55',
    id: 'comp-55',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    dependencies: [
      'use-mask-input',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-55.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'mask',
        'time',
      ],
    },
  },
  {
    name: 'comp-56',
    id: 'comp-56',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
    ],
    dependencies: [
      'emblor',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-56.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'tag',
      ],
    },
  },
  {
    name: 'comp-57',
    id: 'comp-57',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
    ],
    dependencies: [
      'emblor',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-57.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'tag',
      ],
    },
  },
  {
    name: 'comp-58',
    id: 'comp-58',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
    ],
    dependencies: [
      'input-otp',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-58.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'otp',
      ],
    },
  },
  {
    name: 'comp-59',
    id: 'comp-59',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'textarea',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-59.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'textarea',
      ],
    },
  },
  {
    name: 'comp-60',
    id: 'comp-60',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'textarea',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-60.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'textarea',
        'required',
      ],
    },
  },
  {
    name: 'comp-61',
    id: 'comp-61',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'textarea',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-61.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'textarea',
        'helper',
      ],
    },
  },
  {
    name: 'comp-62',
    id: 'comp-62',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'textarea',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-63.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'textarea',
        'hint',
      ],
    },
  },
  {
    name: 'comp-63',
    id: 'comp-63',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'textarea',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-63.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'textarea',
      ],
    },
  },
  {
    name: 'comp-64',
    id: 'comp-64',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'textarea',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-64.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'textarea',
        'error',
      ],
    },
  },
  {
    name: 'comp-65',
    id: 'comp-65',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'textarea',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-65.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'textarea',
      ],
    },
  },
  {
    name: 'comp-66',
    id: 'comp-66',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'textarea',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-66.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'textarea',
      ],
    },
  },
  {
    name: 'comp-67',
    id: 'comp-67',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'textarea',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-67.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'textarea',
        'disabled',
      ],
    },
  },
  {
    name: 'comp-68',
    id: 'comp-68',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'label',
      'textarea',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-68.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'textarea',
        'button',
      ],
    },
  },
  {
    name: 'comp-69',
    id: 'comp-69',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'label',
      'textarea',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-69.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'textarea',
        'button',
      ],
    },
  },
  {
    name: 'comp-70',
    id: 'comp-70',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'label',
      'textarea',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-70.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'textarea',
        'button',
      ],
    },
  },
  {
    name: 'comp-71',
    id: 'comp-71',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'textarea',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-71.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'textarea',
      ],
    },
  },
  {
    name: 'comp-72',
    id: 'comp-72',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'textarea',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-72.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'textarea',
      ],
    },
  },
  {
    name: 'comp-73',
    id: 'comp-73',
    entryPath: '',
    type: 'registry:component',
    relativeFiles: [
      {
        path: 'registry/default/components/comp-73.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'textarea',
      ],
    },
    registryDependencies: [],
  },
  {
    name: 'comp-74',
    id: 'comp-74',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'textarea',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-74.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-character-limit.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'label',
        'textarea',
      ],
    },
  },
  {
    name: 'comp-75',
    id: 'comp-75',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'textarea',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-75.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'textarea',
      ],
    },
  },
  {
    name: 'comp-76',
    id: 'comp-76',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'textarea',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-76.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'textarea',
        'read-only',
      ],
    },
  },
  {
    name: 'comp-77',
    id: 'comp-77',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'textarea',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-77.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'textarea',
      ],
    },
  },
  {
    name: 'comp-78',
    id: 'comp-78',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-78.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-79',
    id: 'comp-79',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-79.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'disabled',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-80',
    id: 'comp-80',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-80.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-81',
    id: 'comp-81',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-81.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-82',
    id: 'comp-82',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-82.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'delete',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-83',
    id: 'comp-83',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-83.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-84',
    id: 'comp-84',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-84.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-85',
    id: 'comp-85',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-85.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'back',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-86',
    id: 'comp-86',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-86.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'next',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-87',
    id: 'comp-87',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-87.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-88',
    id: 'comp-88',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-88.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'dropdown',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-89',
    id: 'comp-89',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-89.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-90',
    id: 'comp-90',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-90.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'loading',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-91',
    id: 'comp-91',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-91.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'loading',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-92',
    id: 'comp-92',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-92.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'counter',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-93',
    id: 'comp-93',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-93.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'kbd',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-94',
    id: 'comp-94',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-94.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'user',
        'avatar',
        'profile',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-95',
    id: 'comp-95',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-95.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'user',
        'avatar',
        'profile',
        'dropdown',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-96',
    id: 'comp-96',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-96.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-97',
    id: 'comp-97',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-97.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-98',
    id: 'comp-98',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-98.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'menu',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-99',
    id: 'comp-99',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'tooltip',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-99.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'tooltip',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-100',
    id: 'comp-100',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-100.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'menu',
        'hamburger',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-101',
    id: 'comp-101',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'toggle',
      'tooltip',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-101.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'toggle',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-102',
    id: 'comp-102',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-102.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'vote',
        'counter',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-103',
    id: 'comp-103',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-103.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'vote',
        'counter',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-104',
    id: 'comp-104',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-104.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'volume',
        'controls',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-105',
    id: 'comp-105',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'tooltip',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-105.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'copy',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-106',
    id: 'comp-106',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-106.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'toggle group',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-107',
    id: 'comp-107',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'toggle-group',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-107.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'toggle group',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-108',
    id: 'comp-108',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-108.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'toggle group',
        'dropdown',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-109',
    id: 'comp-109',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'toggle-group',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-109.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'toggle group',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-110',
    id: 'comp-110',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'toggle-group',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-110.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'toggle group',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-111',
    id: 'comp-111',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-111.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-112',
    id: 'comp-112',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-112.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-113',
    id: 'comp-113',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-113.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'dropdown',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-114',
    id: 'comp-114',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-114.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'dropdown',
        'counter',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-115',
    id: 'comp-115',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-115.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'previous',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-116',
    id: 'comp-116',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-116.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'next',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-117',
    id: 'comp-117',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-117.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'like',
        'counter',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-118',
    id: 'comp-118',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-118.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'like',
        'counter',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-119',
    id: 'comp-119',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    dependencies: [
      '@remixicon/react',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-119.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'social',
        'login',
        'authentication',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-120',
    id: 'comp-120',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    dependencies: [
      '@remixicon/react',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-120.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'social',
        'login',
        'authentication',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-121',
    id: 'comp-121',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    dependencies: [
      '@remixicon/react',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-121.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'social',
        'login',
        'authentication',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-122',
    id: 'comp-122',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    dependencies: [
      '@remixicon/react',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-122.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'social',
        'login',
        'authentication',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-123',
    id: 'comp-123',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-123.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'collapsible',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-124',
    id: 'comp-124',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-124.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'back',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-125',
    id: 'comp-125',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-125.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-file-upload.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'button',
        'upload',
        'user',
        'avatar',
        'profile',
        'image',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-126',
    id: 'comp-126',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-126.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-file-upload.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'button',
        'upload',
        'user',
        'avatar',
        'profile',
        'image',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-127',
    id: 'comp-127',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-127.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-128',
    id: 'comp-128',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-128.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-129',
    id: 'comp-129',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'badge',
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-129.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'dropdown',
        'notification',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-130',
    id: 'comp-130',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'toggle',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-130.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'toggle',
        'dark mode',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-131',
    id: 'comp-131',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dropdown-menu',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-131.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'button',
        'dropdown',
      ],
      style: 2,
    },
  },
  {
    name: 'comp-132',
    id: 'comp-132',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'checkbox',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-132.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'checkbox',
        'label',
        'radix',
      ],
    },
  },
  {
    name: 'comp-133',
    id: 'comp-133',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'checkbox',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-133.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'checkbox',
        'label',
        'radix',
      ],
    },
  },
  {
    name: 'comp-134',
    id: 'comp-134',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'checkbox',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-134.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'checkbox',
        'label',
        'radix',
      ],
    },
  },
  {
    name: 'comp-135',
    id: 'comp-135',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'checkbox',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-135.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'checkbox',
        'label',
        'disabled',
        'radix',
      ],
    },
  },
  {
    name: 'comp-136',
    id: 'comp-136',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'checkbox',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-136.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'checkbox',
        'label',
        'radix',
      ],
    },
  },
  {
    name: 'comp-137',
    id: 'comp-137',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'checkbox',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-137.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'checkbox',
        'label',
        'radix',
      ],
    },
  },
  {
    name: 'comp-138',
    id: 'comp-138',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'checkbox',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-138.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'checkbox',
        'label',
        'login',
        'authentication',
        'radix',
      ],
    },
  },
  {
    name: 'comp-139',
    id: 'comp-139',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'checkbox',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-139.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'checkbox',
        'label',
        'radix',
      ],
    },
  },
  {
    name: 'comp-140',
    id: 'comp-140',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'checkbox',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-140.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'checkbox',
        'label',
        'radix',
      ],
    },
  },
  {
    name: 'comp-141',
    id: 'comp-141',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'checkbox',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-141.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'checkbox',
        'label',
        'radix',
      ],
    },
  },
  {
    name: 'comp-142',
    id: 'comp-142',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'checkbox',
      'label',
      'input',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-142.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'checkbox',
        'label',
        'collapsible',
        'radix',
      ],
    },
  },
  {
    name: 'comp-143',
    id: 'comp-143',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'checkbox',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-143.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'checkbox',
        'label',
        'radix',
      ],
    },
  },
  {
    name: 'comp-144',
    id: 'comp-144',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'checkbox',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-144.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'checkbox',
        'label',
        'card',
        'radix',
      ],
    },
  },
  {
    name: 'comp-145',
    id: 'comp-145',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'checkbox',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-145.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'checkbox',
        'label',
        'card',
        'radix',
      ],
    },
  },
  {
    name: 'comp-146',
    id: 'comp-146',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'checkbox',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-146.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'checkbox',
        'label',
        'card',
        'radix',
      ],
    },
  },
  {
    name: 'comp-147',
    id: 'comp-147',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'checkbox',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-147.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'checkbox',
        'label',
        'card',
        'radix',
      ],
    },
  },
  {
    name: 'comp-148',
    id: 'comp-148',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'checkbox',
      'checkbox-tree',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-148.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'checkbox',
        'label',
        'tree',
        'radix',
      ],
    },
  },
  {
    name: 'comp-149',
    id: 'comp-149',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'checkbox',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-149.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'checkbox',
        'label',
        'week',
        'calendar',
        'radix',
      ],
    },
  },
  {
    name: 'comp-150',
    id: 'comp-150',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-150.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'checkbox',
        'label',
        'toggle',
        'dark mode',
        'radix',
      ],
    },
  },
  {
    name: 'comp-151',
    id: 'comp-151',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'checkbox',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-151.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'checkbox',
        'label',
        'radix',
      ],
    },
  },
  {
    name: 'comp-152',
    id: 'comp-152',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'radio-group',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-152.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'radio',
        'label',
        'radix',
      ],
    },
  },
  {
    name: 'comp-153',
    id: 'comp-153',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'radio-group',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-153.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'radio',
        'label',
        'radix',
      ],
    },
  },
  {
    name: 'comp-154',
    id: 'comp-154',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'radio-group',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-154.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'radio',
        'label',
        'radix',
      ],
    },
  },
  {
    name: 'comp-155',
    id: 'comp-155',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'radio-group',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-155.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'radio',
        'label',
        'radix',
      ],
    },
  },
  {
    name: 'comp-156',
    id: 'comp-156',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
      'radio-group',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-156.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'radio',
        'label',
        'collapsible',
        'radix',
      ],
    },
  },
  {
    name: 'comp-157',
    id: 'comp-157',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'radio-group',
    ],
    dependencies: [
      '@remixicon/react',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-157.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'radio',
        'label',
        'rating',
        'radix',
      ],
    },
  },
  {
    name: 'comp-158',
    id: 'comp-158',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'radio-group',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-158.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'radio',
        'label',
        'color',
        'picker',
        'radix',
      ],
    },
  },
  {
    name: 'comp-159',
    id: 'comp-159',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'radio-group',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-159.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'radio',
        'label',
        'card',
        'radix',
      ],
    },
  },
  {
    name: 'comp-160',
    id: 'comp-160',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'radio-group',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-160.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'radio',
        'label',
        'card',
        'radix',
      ],
    },
  },
  {
    name: 'comp-161',
    id: 'comp-161',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'radio-group',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-161.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'radio',
        'label',
        'card',
        'radix',
      ],
    },
  },
  {
    name: 'comp-162',
    id: 'comp-162',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'radio-group',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-162.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'radio',
        'label',
        'card',
        'radix',
      ],
    },
  },
  {
    name: 'comp-163',
    id: 'comp-163',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'radio-group',
    ],
    dependencies: [
      '@remixicon/react',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-163.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'radio',
        'label',
        'card',
        'checkout',
        'payment',
        'radix',
      ],
    },
  },
  {
    name: 'comp-164',
    id: 'comp-164',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'radio-group',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-164.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'radio',
        'label',
        'card',
        'pricing',
        'radix',
      ],
    },
  },
  {
    name: 'comp-165',
    id: 'comp-165',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'radio-group',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-165.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'radio',
        'label',
        'card',
        'radix',
      ],
    },
  },
  {
    name: 'comp-166',
    id: 'comp-166',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'radio-group',
      'label',
      'badge',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-166.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'radio',
        'label',
        'pricing',
        'radix',
      ],
    },
  },
  {
    name: 'comp-167',
    id: 'comp-167',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'radio-group',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-167.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'radio',
        'label',
        'rating',
        'vote',
        'radix',
      ],
    },
  },
  {
    name: 'comp-168',
    id: 'comp-168',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'radio-group',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-168.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'radio',
        'label',
        'rating',
        'vote',
        'radix',
      ],
    },
  },
  {
    name: 'comp-169',
    id: 'comp-169',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'radio-group',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-169.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'radio',
        'label',
        'dark mode',
        'radix',
      ],
    },
  },
  {
    name: 'comp-170',
    id: 'comp-170',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'radio-group',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-170.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'radio',
        'label',
        'pricing',
        'switch',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-171',
    id: 'comp-171',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'radio-group',
    ],
    dependencies: [
      '@remixicon/react',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-171.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'radio',
        'label',
        'rating',
        'vote',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-172',
    id: 'comp-172',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'switch',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-172.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'switch',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-173',
    id: 'comp-173',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'switch',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-173.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'switch',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-174',
    id: 'comp-174',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'switch',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-174.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'switch',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-175',
    id: 'comp-175',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'switch',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-175.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'switch',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-176',
    id: 'comp-176',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'switch',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-176.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'switch',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-177',
    id: 'comp-177',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'switch',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-177.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'switch',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-178',
    id: 'comp-178',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'switch',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-178.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'switch',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-179',
    id: 'comp-179',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'switch',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-179.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'switch',
        'label',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-180',
    id: 'comp-180',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'switch',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-180.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'switch',
        'label',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-181',
    id: 'comp-181',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'switch',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-181.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'switch',
        'label',
        'dark mode',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-182',
    id: 'comp-182',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'switch',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-182.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'switch',
        'label',
        'dark mode',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-183',
    id: 'comp-183',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'switch',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-183.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'switch',
        'label',
        'dark mode',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-184',
    id: 'comp-184',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'switch',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-184.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'switch',
        'label',
        'dark mode',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-185',
    id: 'comp-185',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'switch',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-185.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'switch',
        'label',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-186',
    id: 'comp-186',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'switch',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-186.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'switch',
        'label',
        'card',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-187',
    id: 'comp-187',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'switch',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-187.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'switch',
        'label',
        'card',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-188',
    id: 'comp-188',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'switch',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-188.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'switch',
        'label',
        'card',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-189',
    id: 'comp-189',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select-native',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-189.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'native select',
      ],
    },
  },
  {
    name: 'comp-190',
    id: 'comp-190',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select-native',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-190.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'native select',
      ],
    },
  },
  {
    name: 'comp-191',
    id: 'comp-191',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select-native',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-191.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'native select',
        'time',
      ],
    },
  },
  {
    name: 'comp-192',
    id: 'comp-192',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select-native',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-192.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'native select',
      ],
    },
  },
  {
    name: 'comp-193',
    id: 'comp-193',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select-native',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-193.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'native select',
      ],
    },
  },
  {
    name: 'comp-194',
    id: 'comp-194',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select-native',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-194.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'native select',
        'error',
      ],
    },
  },
  {
    name: 'comp-195',
    id: 'comp-195',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select-native',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-195.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'native select',
      ],
    },
  },
  {
    name: 'comp-196',
    id: 'comp-196',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select-native',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-196.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'native select',
        'disabled',
      ],
    },
  },
  {
    name: 'comp-197',
    id: 'comp-197',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select-native',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-197.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'native select',
      ],
    },
  },
  {
    name: 'comp-198',
    id: 'comp-198',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select-native',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-198.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'native select',
      ],
    },
  },
  {
    name: 'comp-199',
    id: 'comp-199',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select-native',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-199.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'native select',
      ],
    },
  },
  {
    name: 'comp-200',
    id: 'comp-200',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select-native',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-200.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'native select',
        'timezone',
        'time',
      ],
    },
  },
  {
    name: 'comp-201',
    id: 'comp-201',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select-native',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-201.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'native select',
      ],
    },
  },
  {
    name: 'comp-202',
    id: 'comp-202',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select-native',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-202.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'native select',
      ],
    },
  },
  {
    name: 'comp-203',
    id: 'comp-203',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-203.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'radix',
      ],
    },
  },
  {
    name: 'comp-204',
    id: 'comp-204',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-204.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'radix',
      ],
    },
  },
  {
    name: 'comp-205',
    id: 'comp-205',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-205.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'radix',
      ],
    },
  },
  {
    name: 'comp-206',
    id: 'comp-206',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-206.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'helper',
        'radix',
      ],
    },
  },
  {
    name: 'comp-207',
    id: 'comp-207',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-207.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'radix',
      ],
    },
  },
  {
    name: 'comp-208',
    id: 'comp-208',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-208.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'radix',
      ],
    },
  },
  {
    name: 'comp-209',
    id: 'comp-209',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-209.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'radix',
      ],
    },
  },
  {
    name: 'comp-210',
    id: 'comp-210',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-210.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'disabled',
        'radix',
      ],
    },
  },
  {
    name: 'comp-211',
    id: 'comp-211',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-211.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'required',
        'radix',
      ],
    },
  },
  {
    name: 'comp-212',
    id: 'comp-212',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-212.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'radix',
      ],
    },
  },
  {
    name: 'comp-213',
    id: 'comp-213',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-213.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'radix',
      ],
    },
  },
  {
    name: 'comp-214',
    id: 'comp-214',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-214.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'radix',
      ],
    },
  },
  {
    name: 'comp-215',
    id: 'comp-215',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-215.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'disabled',
        'radix',
      ],
    },
  },
  {
    name: 'comp-216',
    id: 'comp-216',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-216.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'radix',
      ],
    },
  },
  {
    name: 'comp-217',
    id: 'comp-217',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-217.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'radix',
      ],
    },
  },
  {
    name: 'comp-218',
    id: 'comp-218',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-218.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'timezone',
        'time',
        'radix',
      ],
    },
  },
  {
    name: 'comp-219',
    id: 'comp-219',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-219.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'radix',
      ],
    },
  },
  {
    name: 'comp-220',
    id: 'comp-220',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-220.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'status',
        'radix',
      ],
    },
  },
  {
    name: 'comp-221',
    id: 'comp-221',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-221.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'radix',
      ],
    },
  },
  {
    name: 'comp-222',
    id: 'comp-222',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select',
      'label',
    ],
    dependencies: [
      '@remixicon/react',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-222.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'radix',
      ],
    },
  },
  {
    name: 'comp-223',
    id: 'comp-223',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select',
      'label',
    ],
    dependencies: [
      '@remixicon/react',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-223.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'radix',
      ],
    },
  },
  {
    name: 'comp-224',
    id: 'comp-224',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-224.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'radix',
      ],
    },
  },
  {
    name: 'comp-225',
    id: 'comp-225',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-225.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'flag',
        'radix',
      ],
    },
  },
  {
    name: 'comp-226',
    id: 'comp-226',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-226.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'user',
        'avatar',
        'profile',
        'radix',
      ],
    },
  },
  {
    name: 'comp-227',
    id: 'comp-227',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-227.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'user',
        'avatar',
        'profile',
        'radix',
      ],
    },
  },
  {
    name: 'comp-228',
    id: 'comp-228',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'select',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-228.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'user',
        'avatar',
        'profile',
        'radix',
      ],
    },
  },
  {
    name: 'comp-229',
    id: 'comp-229',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'command',
      'label',
      'popover',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-229.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'command',
        'combobox',
        'popover',
        'search',
        'autocomplete',
        'radix',
      ],
    },
  },
  {
    name: 'comp-230',
    id: 'comp-230',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'command',
      'label',
      'popover',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-230.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'command',
        'combobox',
        'popover',
        'search',
        'autocomplete',
        'radix',
      ],
    },
  },
  {
    name: 'comp-231',
    id: 'comp-231',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'command',
      'label',
      'popover',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-231.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'command',
        'combobox',
        'popover',
        'search',
        'autocomplete',
        'timezone',
        'time',
        'radix',
      ],
    },
  },
  {
    name: 'comp-232',
    id: 'comp-232',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'command',
      'label',
      'popover',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-232.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'command',
        'combobox',
        'popover',
        'search',
        'autocomplete',
        'flag',
        'radix',
      ],
    },
  },
  {
    name: 'comp-233',
    id: 'comp-233',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'command',
      'label',
      'popover',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-233.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'command',
        'combobox',
        'popover',
        'search',
        'autocomplete',
        'radix',
      ],
    },
  },
  {
    name: 'comp-234',
    id: 'comp-234',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'multiselect',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-234.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'multiselect',
        'tag',
        'input',
        'search',
        'autocomplete',
        'radix',
      ],
    },
  },
  {
    name: 'comp-235',
    id: 'comp-235',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'multiselect',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-235.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'multiselect',
        'tag',
        'input',
        'search',
        'autocomplete',
        'radix',
      ],
    },
  },
  {
    name: 'comp-236',
    id: 'comp-236',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'select-native',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-236.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'multiselect',
        'native select',
      ],
    },
  },
  {
    name: 'comp-237',
    id: 'comp-237',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
    ],
    dependencies: [
      'react-aria-components',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-237.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'multiselect',
        'react aria',
      ],
    },
  },
  {
    name: 'comp-238',
    id: 'comp-238',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
    ],
    dependencies: [
      'react-aria-components',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-238.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'multiselect',
        'react aria',
      ],
    },
  },
  {
    name: 'comp-239',
    id: 'comp-239',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
    ],
    dependencies: [
      'react-aria-components',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-239.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'label',
        'select',
        'multiselect',
        'react aria',
      ],
    },
  },
  {
    name: 'comp-240',
    id: 'comp-240',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'slider',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-240.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'slider',
        'label',
        'radix',
      ],
    },
  },
  {
    name: 'comp-241',
    id: 'comp-241',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'slider',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-241.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'slider',
        'label',
        'disabled',
        'radix',
      ],
    },
  },
  {
    name: 'comp-242',
    id: 'comp-242',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'slider',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-242.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'slider',
        'label',
        'radix',
      ],
    },
  },
  {
    name: 'comp-243',
    id: 'comp-243',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'slider',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-243.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'slider',
        'label',
        'radix',
      ],
    },
  },
  {
    name: 'comp-244',
    id: 'comp-244',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'slider',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-244.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'slider',
        'label',
        'radix',
      ],
    },
  },
  {
    name: 'comp-245',
    id: 'comp-245',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'slider',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-245.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'slider',
        'label',
        'radix',
      ],
    },
  },
  {
    name: 'comp-246',
    id: 'comp-246',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'slider',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-246.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'slider',
        'label',
        'radix',
      ],
    },
  },
  {
    name: 'comp-247',
    id: 'comp-247',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'slider',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-247.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'slider',
        'label',
        'radix',
      ],
    },
  },
  {
    name: 'comp-248',
    id: 'comp-248',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'slider',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-248.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'slider',
        'label',
        'radix',
      ],
    },
  },
  {
    name: 'comp-249',
    id: 'comp-249',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'slider',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-249.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'slider',
        'label',
        'tooltip',
        'radix',
      ],
    },
  },
  {
    name: 'comp-250',
    id: 'comp-250',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'slider',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-250.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'slider',
        'range slider',
        'label',
        'range',
        'radix',
      ],
    },
  },
  {
    name: 'comp-251',
    id: 'comp-251',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'slider',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-251.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'slider',
        'range slider',
        'label',
        'range',
        'radix',
      ],
    },
  },
  {
    name: 'comp-252',
    id: 'comp-252',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'slider',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-252.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'slider',
        'label',
        'volume',
        'controls',
        'radix',
      ],
    },
  },
  {
    name: 'comp-253',
    id: 'comp-253',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'slider',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-253.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'slider',
        'range slider',
        'label',
        'range',
        'radix',
      ],
    },
  },
  {
    name: 'comp-254',
    id: 'comp-254',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'input',
      'label',
      'slider',
      'tooltip',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-254.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-slider-with-input.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'slider',
        'label',
        'button',
        'input',
        'tooltip',
        'reset',
        'radix',
      ],
    },
  },
  {
    name: 'comp-255',
    id: 'comp-255',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
      'slider',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-255.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-slider-with-input.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'slider',
        'label',
        'input',
        'radix',
      ],
    },
  },
  {
    name: 'comp-256',
    id: 'comp-256',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'slider',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-256.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'slider',
        'label',
        'vote',
        'rating',
        'radix',
      ],
    },
  },
  {
    name: 'comp-257',
    id: 'comp-257',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'slider',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-257.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'slider',
        'label',
        'vote',
        'rating',
        'radix',
      ],
    },
  },
  {
    name: 'comp-258',
    id: 'comp-258',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
      'slider',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-258.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-slider-with-input.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'slider',
        'range slider',
        'label',
        'input',
        'range',
        'radix',
      ],
    },
  },
  {
    name: 'comp-259',
    id: 'comp-259',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'label',
      'slider',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-259.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'slider',
        'label',
        'button',
        'pricing',
        'radix',
      ],
    },
  },
  {
    name: 'comp-260',
    id: 'comp-260',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'label',
      'slider',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-260.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'slider',
        'range slider',
        'label',
        'button',
        'radix',
      ],
    },
  },
  {
    name: 'comp-261',
    id: 'comp-261',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'slider',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-261.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'slider',
        'vertical slider',
        'label',
        'radix',
      ],
    },
  },
  {
    name: 'comp-262',
    id: 'comp-262',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'slider',
      'input',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-262.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-slider-with-input.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'slider',
        'vertical slider',
        'label',
        'input',
        'radix',
      ],
    },
  },
  {
    name: 'comp-263',
    id: 'comp-263',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'slider',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-263.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'slider',
        'vertical slider',
        'range slider',
        'label',
        'radix',
      ],
    },
  },
  {
    name: 'comp-264',
    id: 'comp-264',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'slider',
      'input',
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-264.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-slider-with-input.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'slider',
        'label',
        'input',
        'button',
        'reset',
        'radix',
      ],
    },
  },
  {
    name: 'comp-265',
    id: 'comp-265',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'slider',
      'input',
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-265.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-slider-with-input.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'slider',
        'label',
        'input',
        'button',
        'radix',
      ],
    },
  },
  {
    name: 'comp-266',
    id: 'comp-266',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'slider',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-266.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'slider',
        'label',
        'equalizer',
        'radix',
      ],
    },
  },
  {
    name: 'comp-267',
    id: 'comp-267',
    entryPath: '',
    type: 'registry:component',
    relativeFiles: [
      {
        path: 'registry/default/components/comp-267.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'alert',
        'warning',
      ],
      colSpan: 2,
    },
    registryDependencies: [],
  },
  {
    name: 'comp-268',
    id: 'comp-268',
    entryPath: '',
    type: 'registry:component',
    relativeFiles: [
      {
        path: 'registry/default/components/comp-268.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'alert',
        'warning',
      ],
      colSpan: 2,
    },
    registryDependencies: [],
  },
  {
    name: 'comp-269',
    id: 'comp-269',
    entryPath: '',
    type: 'registry:component',
    relativeFiles: [
      {
        path: 'registry/default/components/comp-269.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'alert',
        'error',
      ],
      colSpan: 2,
    },
    registryDependencies: [],
  },
  {
    name: 'comp-270',
    id: 'comp-270',
    entryPath: '',
    type: 'registry:component',
    relativeFiles: [
      {
        path: 'registry/default/components/comp-270.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'alert',
        'error',
      ],
      colSpan: 2,
    },
    registryDependencies: [],
  },
  {
    name: 'comp-271',
    id: 'comp-271',
    entryPath: '',
    type: 'registry:component',
    relativeFiles: [
      {
        path: 'registry/default/components/comp-271.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'alert',
        'success',
      ],
      colSpan: 2,
    },
    registryDependencies: [],
  },
  {
    name: 'comp-272',
    id: 'comp-272',
    entryPath: '',
    type: 'registry:component',
    relativeFiles: [
      {
        path: 'registry/default/components/comp-272.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'alert',
        'success',
      ],
      colSpan: 2,
    },
    registryDependencies: [],
  },
  {
    name: 'comp-273',
    id: 'comp-273',
    entryPath: '',
    type: 'registry:component',
    relativeFiles: [
      {
        path: 'registry/default/components/comp-273.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'alert',
        'info',
      ],
      colSpan: 2,
    },
    registryDependencies: [],
  },
  {
    name: 'comp-274',
    id: 'comp-274',
    entryPath: '',
    type: 'registry:component',
    relativeFiles: [
      {
        path: 'registry/default/components/comp-274.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'alert',
        'info',
      ],
      colSpan: 2,
    },
    registryDependencies: [],
  },
  {
    name: 'comp-275',
    id: 'comp-275',
    entryPath: '',
    type: 'registry:component',
    relativeFiles: [
      {
        path: 'registry/default/components/comp-275.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'alert',
        'warning',
      ],
      colSpan: 2,
    },
    registryDependencies: [],
  },
  {
    name: 'comp-276',
    id: 'comp-276',
    entryPath: '',
    type: 'registry:component',
    relativeFiles: [
      {
        path: 'registry/default/components/comp-276.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'alert',
        'warning',
      ],
      colSpan: 2,
    },
    registryDependencies: [],
  },
  {
    name: 'comp-277',
    id: 'comp-277',
    entryPath: '',
    type: 'registry:component',
    relativeFiles: [
      {
        path: 'registry/default/components/comp-277.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'alert',
        'error',
        'signup',
        'authentication',
      ],
      colSpan: 2,
    },
    registryDependencies: [],
  },
  {
    name: 'comp-278',
    id: 'comp-278',
    entryPath: '',
    type: 'registry:component',
    relativeFiles: [
      {
        path: 'registry/default/components/comp-278.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'alert',
        'error',
        'signup',
        'authentication',
      ],
      colSpan: 2,
    },
    registryDependencies: [],
  },
  {
    name: 'comp-279',
    id: 'comp-279',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-279.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'notification',
        'warning',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-280',
    id: 'comp-280',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-280.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'notification',
        'error',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-281',
    id: 'comp-281',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-281.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'notification',
        'success',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-282',
    id: 'comp-282',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-282.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'notification',
        'info',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-283',
    id: 'comp-283',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-283.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'notification',
        'warning',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-284',
    id: 'comp-284',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-284.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'notification',
        'error',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-285',
    id: 'comp-285',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-285.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'notification',
        'success',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-286',
    id: 'comp-286',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-286.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'notification',
        'info',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-287',
    id: 'comp-287',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-287.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'notification',
        'button',
        'success',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-288',
    id: 'comp-288',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-288.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'notification',
        'success',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-289',
    id: 'comp-289',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-289.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'notification',
        'button',
        'warning',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-290',
    id: 'comp-290',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-290.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'notification',
        'button',
        'error',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-291',
    id: 'comp-291',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-291.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'notification',
        'button',
        'success',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-292',
    id: 'comp-292',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-292.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'notification',
        'button',
        'info',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-293',
    id: 'comp-293',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-293.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'notification',
        'button',
        'cookies',
        'gdpr',
        'privacy',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-294',
    id: 'comp-294',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-294.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'notification',
        'button',
        'info',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-295',
    id: 'comp-295',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-295.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'notification',
        'button',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-296',
    id: 'comp-296',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-296.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'notification',
        'button',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-297',
    id: 'comp-297',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'toast',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-297.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-toast.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'notification',
        'toast',
        'radix',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-298',
    id: 'comp-298',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'toast',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-298.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'notification',
        'toast',
        'success',
        'radix',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-299',
    id: 'comp-299',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    dependencies: [
      'sonner',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-299.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'notification',
        'toast',
        'sonner',
        'radix',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-300',
    id: 'comp-300',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    dependencies: [
      'sonner',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-300.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'notification',
        'toast',
        'sonner',
        'success',
        'radix',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-301',
    id: 'comp-301',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-301.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'banner',
        'cookies',
        'gdpr',
        'privacy',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-302',
    id: 'comp-302',
    entryPath: '',
    type: 'registry:component',
    relativeFiles: [
      {
        path: 'registry/default/components/comp-302.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'banner',
      ],
      colSpan: 3,
    },
    registryDependencies: [],
  },
  {
    name: 'comp-303',
    id: 'comp-303',
    entryPath: '',
    type: 'registry:component',
    relativeFiles: [
      {
        path: 'registry/default/components/comp-303.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'banner',
      ],
      colSpan: 3,
    },
    registryDependencies: [],
  },
  {
    name: 'comp-304',
    id: 'comp-304',
    entryPath: '',
    type: 'registry:component',
    relativeFiles: [
      {
        path: 'registry/default/components/comp-304.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'banner',
      ],
      colSpan: 3,
    },
    registryDependencies: [],
  },
  {
    name: 'comp-305',
    id: 'comp-305',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-305.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'banner',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-306',
    id: 'comp-306',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-306.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'banner',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-307',
    id: 'comp-307',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-307.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'banner',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-308',
    id: 'comp-308',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-308.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'banner',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-309',
    id: 'comp-309',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-309.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'banner',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-310',
    id: 'comp-310',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-310.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'banner',
        'countdown',
        'sale',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-311',
    id: 'comp-311',
    entryPath: '',
    type: 'registry:component',
    relativeFiles: [
      {
        path: 'registry/default/components/comp-311.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'banner',
        'newsletter',
        'subscribe',
      ],
      colSpan: 3,
    },
    registryDependencies: [],
  },
  {
    name: 'comp-312',
    id: 'comp-312',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-312.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'banner',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-313',
    id: 'comp-313',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'alert-dialog',
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-313.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dialog',
        'modal',
        'alert',
        'alert dialog',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-314',
    id: 'comp-314',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'alert-dialog',
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-314.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dialog',
        'modal',
        'alert',
        'alert dialog',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-315',
    id: 'comp-315',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dialog',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-315.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dialog',
        'modal',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-316',
    id: 'comp-316',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dialog',
      'scroll-area',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-316.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dialog',
        'modal',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-317',
    id: 'comp-317',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dialog',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-317.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dialog',
        'modal',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-318',
    id: 'comp-318',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dialog',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-318.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dialog',
        'modal',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-319',
    id: 'comp-319',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dialog',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-319.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dialog',
        'modal',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-320',
    id: 'comp-320',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dialog',
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-320.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dialog',
        'modal',
        'delete',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-321',
    id: 'comp-321',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dialog',
      'input',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-321.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dialog',
        'modal',
        'newsletter',
        'subscribe',
        'form',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-322',
    id: 'comp-322',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dialog',
      'textarea',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-322.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dialog',
        'modal',
        'feedback',
        'form',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-323',
    id: 'comp-323',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dialog',
      'label',
      'radio-group',
      'textarea',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-323.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dialog',
        'modal',
        'rating',
        'feedback',
        'form',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-324',
    id: 'comp-324',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dialog',
    ],
    dependencies: [
      'input-otp',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-324.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dialog',
        'modal',
        'otp',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-325',
    id: 'comp-325',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dialog',
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-325.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dialog',
        'modal',
        'signup',
        'authentication',
        'form',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-326',
    id: 'comp-326',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'checkbox',
      'dialog',
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-326.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dialog',
        'modal',
        'login',
        'authentication',
        'form',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-327',
    id: 'comp-327',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dialog',
      'input',
      'label',
      'tooltip',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-327.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dialog',
        'modal',
        'form',
        'user',
        'team',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-328',
    id: 'comp-328',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'checkbox',
      'dialog',
      'input',
      'label',
    ],
    dependencies: [
      'react-payment-inputs',
    ],
    devDependencies: [
      '@types/react-payment-inputs',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-328.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dialog',
        'modal',
        'checkout',
        'payment',
        'credit card',
        'form',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-329',
    id: 'comp-329',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'badge',
      'button',
      'dialog',
      'input',
      'label',
      'radio-group',
    ],
    dependencies: [
      'react-payment-inputs',
    ],
    devDependencies: [
      '@types/react-payment-inputs',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-329.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dialog',
        'modal',
        'checkout',
        'payment',
        'credit card',
        'form',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-330',
    id: 'comp-330',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dialog',
      'label',
      'radio-group',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-330.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dialog',
        'modal',
        'user',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-331',
    id: 'comp-331',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dialog',
      'input',
      'label',
      'textarea',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-331.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-character-limit.ts',
        type: 'hook',
      },
      {
        path: 'registry/default/hooks/use-file-upload.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'dialog',
        'modal',
        'user',
        'profile',
        'image',
        'avatar',
        'form',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-332',
    id: 'comp-332',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dialog',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-332.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dialog',
        'modal',
        'onboarding',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-333',
    id: 'comp-333',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'command',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-333.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dialog',
        'modal',
        'command',
        'combobox',
        'popover',
        'search',
        'radix',
        'autocomplete',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-334',
    id: 'comp-334',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'accordion',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-334.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'accordion',
        'radix',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-335',
    id: 'comp-335',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'accordion',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-335.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'accordion',
        'radix',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-336',
    id: 'comp-336',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'accordion',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-336.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'accordion',
        'radix',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-337',
    id: 'comp-337',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'accordion',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-337.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'accordion',
        'radix',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-338',
    id: 'comp-338',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'accordion',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-338.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'accordion',
        'radix',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-339',
    id: 'comp-339',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'accordion',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-339.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'accordion',
        'radix',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-340',
    id: 'comp-340',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'accordion',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-340.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'accordion',
        'radix',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-341',
    id: 'comp-341',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'accordion',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-341.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'accordion',
        'radix',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-342',
    id: 'comp-342',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'accordion',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-342.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'accordion',
        'radix',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-343',
    id: 'comp-343',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'accordion',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-343.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'accordion',
        'radix',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-344',
    id: 'comp-344',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'accordion',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-344.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'accordion',
        'radix',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-345',
    id: 'comp-345',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'accordion',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-345.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'accordion',
        'radix',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-346',
    id: 'comp-346',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'accordion',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-346.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'accordion',
        'radix',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-347',
    id: 'comp-347',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'accordion',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-347.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'accordion',
        'radix',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-348',
    id: 'comp-348',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'accordion',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-348.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'accordion',
        'radix',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-349',
    id: 'comp-349',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'accordion',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-349.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'accordion',
        'radix',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-350',
    id: 'comp-350',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'accordion',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-350.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'accordion',
        'radix',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-351',
    id: 'comp-351',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'accordion',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-351.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'accordion',
        'radix',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-352',
    id: 'comp-352',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'accordion',
      'collapsible',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-352.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'accordion',
        'collapsible',
        'radix',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-353',
    id: 'comp-353',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'accordion',
      'collapsible',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-353.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'accordion',
        'collapsible',
        'radix',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-354',
    id: 'comp-354',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'tooltip',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-354.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tooltip',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-355',
    id: 'comp-355',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'tooltip',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-355.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tooltip',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-356',
    id: 'comp-356',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'tooltip',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-356.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tooltip',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-357',
    id: 'comp-357',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'tooltip',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-357.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tooltip',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-358',
    id: 'comp-358',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'tooltip',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-358.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tooltip',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-359',
    id: 'comp-359',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'tooltip',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-359.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tooltip',
        'image',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-360',
    id: 'comp-360',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'tooltip',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-360.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tooltip',
        'button',
        'kbd',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-361',
    id: 'comp-361',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'tooltip',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-361.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tooltip',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-362',
    id: 'comp-362',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'tooltip',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-362.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tooltip',
        'chart',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-363',
    id: 'comp-363',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'hover-card',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-363.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tooltip',
        'hover card',
        'user',
        'avatar',
        'profile',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-364',
    id: 'comp-364',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'hover-card',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-364.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tooltip',
        'hover card',
        'user',
        'avatar',
        'profile',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-365',
    id: 'comp-365',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'hover-card',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-365.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tooltip',
        'hover card',
        'image',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-366',
    id: 'comp-366',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dropdown-menu',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-366.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dropdown',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-367',
    id: 'comp-367',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dropdown-menu',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-367.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dropdown',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-368',
    id: 'comp-368',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dropdown-menu',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-368.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dropdown',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-369',
    id: 'comp-369',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dropdown-menu',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-369.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dropdown',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-370',
    id: 'comp-370',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dropdown-menu',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-370.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dropdown',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-371',
    id: 'comp-371',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dropdown-menu',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-371.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dropdown',
        'checkbox',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-372',
    id: 'comp-372',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dropdown-menu',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-372.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dropdown',
        'radio',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-373',
    id: 'comp-373',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dropdown-menu',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-373.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dropdown',
        'kbd',
        'delete',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-374',
    id: 'comp-374',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dropdown-menu',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-374.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dropdown',
        'checkbox',
        'radio',
        'delete',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-375',
    id: 'comp-375',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dropdown-menu',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-375.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dropdown',
        'user',
        'profile',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-376',
    id: 'comp-376',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dropdown-menu',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-376.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dropdown',
        'user',
        'profile',
        'avatar',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-377',
    id: 'comp-377',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dropdown-menu',
      'avatar',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-377.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dropdown',
        'user',
        'avatar',
        'profile',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-378',
    id: 'comp-378',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dropdown-menu',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-378.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dropdown',
        'info',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-379',
    id: 'comp-379',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dropdown-menu',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-379.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dropdown',
        'text editor',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-380',
    id: 'comp-380',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dropdown-menu',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-380.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'dropdown',
        'dark mode',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-381',
    id: 'comp-381',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'checkbox',
      'label',
      'popover',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-381.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'popover',
        'filter',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-382',
    id: 'comp-382',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'badge',
      'button',
      'popover',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-382.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'popover',
        'notification',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-383',
    id: 'comp-383',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'badge',
      'button',
      'popover',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-383.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'popover',
        'notification',
        'user',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-384',
    id: 'comp-384',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'popover',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-384.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'popover',
        'tooltip',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-385',
    id: 'comp-385',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'popover',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-385.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'popover',
        'tooltip',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-386',
    id: 'comp-386',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'popover',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-386.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'popover',
        'tooltip',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-387',
    id: 'comp-387',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'input',
      'popover',
      'tooltip',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-387.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'popover',
        'share',
        'social',
        'copy',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-388',
    id: 'comp-388',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'popover',
      'textarea',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-388.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'popover',
        'feedback',
        'form',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-389',
    id: 'comp-389',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'popover',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-389.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'popover',
        'tour',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-390',
    id: 'comp-390',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'avatar',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-390.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'avatar',
        'user',
        'profile',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-391',
    id: 'comp-391',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'avatar',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-391.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'avatar',
        'user',
        'profile',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-392',
    id: 'comp-392',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'avatar',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-392.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'avatar',
        'user',
        'profile',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-393',
    id: 'comp-393',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'avatar',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-393.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'avatar',
        'user',
        'profile',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-394',
    id: 'comp-394',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'avatar',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-394.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'avatar',
        'user',
        'profile',
        'status',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-395',
    id: 'comp-395',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'avatar',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-395.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'avatar',
        'user',
        'profile',
        'status',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-396',
    id: 'comp-396',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'avatar',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-396.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'avatar',
        'user',
        'profile',
        'status',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-397',
    id: 'comp-397',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'avatar',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-397.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'avatar',
        'user',
        'profile',
        'badge',
        'chip',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-398',
    id: 'comp-398',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'avatar',
      'badge',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-398.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'avatar',
        'user',
        'profile',
        'badge',
        'chip',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-399',
    id: 'comp-399',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'avatar',
      'badge',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-399.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'avatar',
        'user',
        'profile',
        'badge',
        'chip',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-400',
    id: 'comp-400',
    entryPath: '',
    type: 'registry:component',
    relativeFiles: [
      {
        path: 'registry/default/components/comp-400.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'avatar',
        'user',
        'profile',
      ],
      style: 1,
    },
    registryDependencies: [],
  },
  {
    name: 'comp-401',
    id: 'comp-401',
    entryPath: '',
    type: 'registry:component',
    relativeFiles: [
      {
        path: 'registry/default/components/comp-401.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'avatar',
        'avatar group',
      ],
      style: 1,
    },
    registryDependencies: [],
  },
  {
    name: 'comp-402',
    id: 'comp-402',
    entryPath: '',
    type: 'registry:component',
    relativeFiles: [
      {
        path: 'registry/default/components/comp-402.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'avatar',
        'avatar group',
      ],
      style: 1,
    },
    registryDependencies: [],
  },
  {
    name: 'comp-403',
    id: 'comp-403',
    entryPath: '',
    type: 'registry:component',
    relativeFiles: [
      {
        path: 'registry/default/components/comp-403.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'avatar',
        'avatar group',
      ],
      style: 1,
    },
    registryDependencies: [],
  },
  {
    name: 'comp-404',
    id: 'comp-404',
    entryPath: '',
    type: 'registry:component',
    relativeFiles: [
      {
        path: 'registry/default/components/comp-404.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'avatar',
        'avatar group',
      ],
      style: 1,
    },
    registryDependencies: [],
  },
  {
    name: 'comp-405',
    id: 'comp-405',
    entryPath: '',
    type: 'registry:component',
    relativeFiles: [
      {
        path: 'registry/default/components/comp-405.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'avatar',
        'avatar group',
      ],
      style: 1,
    },
    registryDependencies: [],
  },
  {
    name: 'comp-406',
    id: 'comp-406',
    entryPath: '',
    type: 'registry:component',
    relativeFiles: [
      {
        path: 'registry/default/components/comp-406.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'avatar',
        'avatar group',
      ],
      style: 1,
    },
    registryDependencies: [],
  },
  {
    name: 'comp-407',
    id: 'comp-407',
    entryPath: '',
    type: 'registry:component',
    relativeFiles: [
      {
        path: 'registry/default/components/comp-407.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'avatar',
        'avatar group',
      ],
      style: 1,
    },
    registryDependencies: [],
  },
  {
    name: 'comp-408',
    id: 'comp-408',
    entryPath: '',
    type: 'registry:component',
    relativeFiles: [
      {
        path: 'registry/default/components/comp-408.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'avatar',
        'avatar group',
      ],
      style: 1,
    },
    registryDependencies: [],
  },
  {
    name: 'comp-409',
    id: 'comp-409',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-409.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'avatar',
        'avatar group',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-410',
    id: 'comp-410',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-410.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'avatar',
        'avatar group',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-411',
    id: 'comp-411',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-411.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'avatar',
        'avatar group',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-412',
    id: 'comp-412',
    entryPath: '',
    type: 'registry:component',
    relativeFiles: [
      {
        path: 'registry/default/components/comp-412.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'avatar',
        'avatar group',
      ],
      style: 1,
    },
    registryDependencies: [],
  },
  {
    name: 'comp-413',
    id: 'comp-413',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'badge',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-413.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'badge',
        'chip',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-414',
    id: 'comp-414',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'badge',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-414.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'badge',
        'chip',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-415',
    id: 'comp-415',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'badge',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-415.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'badge',
        'chip',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-416',
    id: 'comp-416',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'badge',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-416.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'badge',
        'chip',
        'counter',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-417',
    id: 'comp-417',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'badge',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-417.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'badge',
        'chip',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-418',
    id: 'comp-418',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'badge',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-418.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'badge',
        'chip',
        'counter',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-419',
    id: 'comp-419',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'badge',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-419.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'badge',
        'chip',
        'status',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-420',
    id: 'comp-420',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'badge',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-420.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'badge',
        'chip',
        'status',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-421',
    id: 'comp-421',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'badge',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-421.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'badge',
        'chip',
        'status',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-422',
    id: 'comp-422',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'badge',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-422.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'badge',
        'chip',
        'status',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-423',
    id: 'comp-423',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'badge',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-423.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'badge',
        'chip',
        'checkbox',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-424',
    id: 'comp-424',
    entryPath: '',
    type: 'registry:component',
    relativeFiles: [
      {
        path: 'registry/default/components/comp-424.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'badge',
        'chip',
      ],
      style: 1,
    },
    registryDependencies: [],
  },
  {
    name: 'comp-425',
    id: 'comp-425',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'badge',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-425.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'badge',
        'chip',
        'tag',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-426',
    id: 'comp-426',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tabs',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-426.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tabs',
        'radix',
      ],
      colSpan: 2,
      style: 2,
    },
  },
  {
    name: 'comp-427',
    id: 'comp-427',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tabs',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-427.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tabs',
        'radix',
      ],
      colSpan: 2,
      style: 2,
    },
  },
  {
    name: 'comp-428',
    id: 'comp-428',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tabs',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-428.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tabs',
        'radix',
      ],
      colSpan: 2,
      style: 2,
    },
  },
  {
    name: 'comp-429',
    id: 'comp-429',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tabs',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-429.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tabs',
        'radix',
      ],
      colSpan: 2,
      style: 2,
    },
  },
  {
    name: 'comp-430',
    id: 'comp-430',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tabs',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-430.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tabs',
        'radix',
      ],
      colSpan: 2,
      style: 2,
    },
  },
  {
    name: 'comp-431',
    id: 'comp-431',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tabs',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-431.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tabs',
        'radix',
      ],
      colSpan: 2,
      style: 2,
    },
  },
  {
    name: 'comp-432',
    id: 'comp-432',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tabs',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-432.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tabs',
        'radix',
      ],
      colSpan: 2,
      style: 2,
    },
  },
  {
    name: 'comp-433',
    id: 'comp-433',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'scroll-area',
      'tabs',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-433.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tabs',
        'radix',
      ],
      colSpan: 2,
      style: 2,
    },
  },
  {
    name: 'comp-434',
    id: 'comp-434',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'scroll-area',
      'tabs',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-434.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tabs',
        'radix',
      ],
      colSpan: 2,
      style: 2,
    },
  },
  {
    name: 'comp-435',
    id: 'comp-435',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'scroll-area',
      'tabs',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-435.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tabs',
        'radix',
      ],
      colSpan: 2,
      style: 2,
    },
  },
  {
    name: 'comp-436',
    id: 'comp-436',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'scroll-area',
      'tabs',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-436.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tabs',
        'radix',
      ],
      colSpan: 2,
      style: 2,
    },
  },
  {
    name: 'comp-437',
    id: 'comp-437',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'badge',
      'scroll-area',
      'tabs',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-437.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tabs',
        'radix',
      ],
      colSpan: 2,
      style: 2,
    },
  },
  {
    name: 'comp-438',
    id: 'comp-438',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tabs',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-438.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tabs',
        'radix',
      ],
      colSpan: 2,
      style: 2,
    },
  },
  {
    name: 'comp-439',
    id: 'comp-439',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tabs',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-439.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tabs',
        'radix',
      ],
      colSpan: 2,
      style: 2,
    },
  },
  {
    name: 'comp-440',
    id: 'comp-440',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tabs',
      'tooltip',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-440.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tabs',
        'radix',
      ],
      colSpan: 2,
      style: 2,
    },
  },
  {
    name: 'comp-441',
    id: 'comp-441',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tabs',
      'tooltip',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-441.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tabs',
        'radix',
      ],
      colSpan: 2,
      style: 2,
    },
  },
  {
    name: 'comp-442',
    id: 'comp-442',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tabs',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-442.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tabs',
        'vertical tabs',
        'radix',
      ],
      colSpan: 2,
      style: 2,
    },
  },
  {
    name: 'comp-443',
    id: 'comp-443',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tabs',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-443.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tabs',
        'vertical tabs',
        'radix',
      ],
      colSpan: 2,
      style: 2,
    },
  },
  {
    name: 'comp-444',
    id: 'comp-444',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tabs',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-444.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tabs',
        'vertical tabs',
        'radix',
      ],
      colSpan: 2,
      style: 2,
    },
  },
  {
    name: 'comp-445',
    id: 'comp-445',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tabs',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-445.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tabs',
        'vertical tabs',
        'radix',
      ],
      colSpan: 2,
      style: 2,
    },
  },
  {
    name: 'comp-446',
    id: 'comp-446',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'breadcrumb',
      'dropdown-menu',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-446.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'breadcrumb',
        'radix',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-447',
    id: 'comp-447',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'breadcrumb',
      'dropdown-menu',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-447.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'breadcrumb',
        'dropdown',
        'radix',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-448',
    id: 'comp-448',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'breadcrumb',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-448.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'breadcrumb',
        'radix',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-449',
    id: 'comp-449',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'breadcrumb',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-449.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'breadcrumb',
        'radix',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-450',
    id: 'comp-450',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'breadcrumb',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-450.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'breadcrumb',
        'radix',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-451',
    id: 'comp-451',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'breadcrumb',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-451.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'breadcrumb',
        'radix',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-452',
    id: 'comp-452',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'breadcrumb',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-452.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'breadcrumb',
        'radix',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-453',
    id: 'comp-453',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'breadcrumb',
      'select',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-453.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'breadcrumb',
        'select',
        'radix',
      ],
      colSpan: 2,
      style: 1,
    },
  },
  {
    name: 'comp-454',
    id: 'comp-454',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'pagination',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-454.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'pagination',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-455',
    id: 'comp-455',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'pagination',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-455.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'pagination',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-456',
    id: 'comp-456',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'pagination',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-456.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'pagination',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-457',
    id: 'comp-457',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'pagination',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-457.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'pagination',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-458',
    id: 'comp-458',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'pagination',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-458.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'pagination',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-459',
    id: 'comp-459',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'pagination',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-459.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-pagination.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'pagination',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-460',
    id: 'comp-460',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'pagination',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-460.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-pagination.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'pagination',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-461',
    id: 'comp-461',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'pagination',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-461.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-pagination.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'pagination',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-462',
    id: 'comp-462',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'pagination',
      'select',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-462.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-pagination.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'pagination',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-463',
    id: 'comp-463',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'label',
      'pagination',
      'select',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-463.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-pagination.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'pagination',
        'select',
        'radix',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-464',
    id: 'comp-464',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'pagination',
      'select',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-464.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-pagination.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'pagination',
        'select',
        'radix',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-465',
    id: 'comp-465',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
      'pagination',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-465.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-pagination.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'pagination',
        'input',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-466',
    id: 'comp-466',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'table',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-466.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'table',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-467',
    id: 'comp-467',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'table',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-467.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'table',
        'user',
        'avatar',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-468',
    id: 'comp-468',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'table',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-468.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'table',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-469',
    id: 'comp-469',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'table',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-469.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'table',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-470',
    id: 'comp-470',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'table',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-470.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'table',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-471',
    id: 'comp-471',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'table',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-471.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'table',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-472',
    id: 'comp-472',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'checkbox',
      'table',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-472.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'table',
        'checkbox',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-473',
    id: 'comp-473',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'checkbox',
      'table',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-473.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'table',
        'checkbox',
        'card',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-474',
    id: 'comp-474',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'table',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-474.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'table',
        'vertical table',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-475',
    id: 'comp-475',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'table',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-475.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'table',
        'sticky',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-476',
    id: 'comp-476',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'table',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-476.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'table',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-477',
    id: 'comp-477',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'badge',
      'checkbox',
      'table',
    ],
    dependencies: [
      '@tanstack/react-table',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-477.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'table',
        'tanstack',
        'checkbox',
        'badge',
        'chip',
        'flag',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-478',
    id: 'comp-478',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'checkbox',
      'input',
      'label',
      'select',
      'table',
    ],
    dependencies: [
      '@tanstack/react-table',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-478.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'table',
        'tanstack',
        'checkbox',
        'search',
        'select',
        'range',
        'input',
        'filter',
        'sort',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-479',
    id: 'comp-479',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'table',
    ],
    dependencies: [
      '@tanstack/react-table',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-479.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'table',
        'tanstack',
        'flag',
        'sort',
        'resize',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-480',
    id: 'comp-480',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dropdown-menu',
      'table',
    ],
    dependencies: [
      '@tanstack/react-table',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-480.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'table',
        'tanstack',
        'flag',
        'sticky',
        'resize',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-481',
    id: 'comp-481',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dropdown-menu',
      'table',
    ],
    dependencies: [
      '@dnd-kit/core',
      '@dnd-kit/modifiers',
      '@dnd-kit/sortable',
      '@dnd-kit/utilities',
      '@tanstack/react-table',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-481.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'table',
        'tanstack',
        'flag',
        'sort',
        'drag and drop',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-482',
    id: 'comp-482',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'badge',
      'button',
      'checkbox',
      'table',
    ],
    dependencies: [
      '@tanstack/react-table',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-482.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'table',
        'tanstack',
        'checkbox',
        'collapsible',
        'flag',
        'badge',
        'chip',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-483',
    id: 'comp-483',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'badge',
      'button',
      'checkbox',
      'label',
      'pagination',
      'select',
      'table',
    ],
    dependencies: [
      '@tanstack/react-table',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-483.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'table',
        'tanstack',
        'checkbox',
        'sort',
        'flag',
        'badge',
        'chip',
        'pagination',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-484',
    id: 'comp-484',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'badge',
      'button',
      'checkbox',
      'pagination',
      'select',
      'table',
    ],
    dependencies: [
      '@tanstack/react-table',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-484.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-pagination.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'table',
        'tanstack',
        'checkbox',
        'sort',
        'flag',
        'badge',
        'chip',
        'pagination',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-485',
    id: 'comp-485',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'alert-dialog',
      'badge',
      'button',
      'checkbox',
      'dropdown-menu',
      'input',
      'label',
      'pagination',
      'popover',
      'select',
      'table',
    ],
    dependencies: [
      '@tanstack/react-table',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-485.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'table',
        'tanstack',
        'checkbox',
        'sort',
        'flag',
        'badge',
        'chip',
        'pagination',
        'filter',
        'select',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-486',
    id: 'comp-486',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-486.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'input',
        'label',
        'range',
      ],
    },
  },
  {
    name: 'comp-487',
    id: 'comp-487',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'calendar-rac',
    ],
    dependencies: [
      'react-aria-components',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-487.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'calendar',
        'date',
        'react aria',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-488',
    id: 'comp-488',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'calendar-rac',
    ],
    dependencies: [
      'react-aria-components',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-488.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'calendar',
        'range calendar',
        'date',
        'react aria',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-489',
    id: 'comp-489',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'calendar-rac',
    ],
    dependencies: [
      'react-aria-components',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-489.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'calendar',
        'range calendar',
        'date',
        'disabled',
        'react aria',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-490',
    id: 'comp-490',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'calendar',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-490.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'calendar',
        'date',
        'react day picker',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-491',
    id: 'comp-491',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'calendar',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-491.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'calendar',
        'range calendar',
        'date',
        'react day picker',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-492',
    id: 'comp-492',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'calendar',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-492.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'calendar',
        'range calendar',
        'date',
        'disabled',
        'react day picker',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-493',
    id: 'comp-493',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'calendar',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-493.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'calendar',
        'date',
        'react day picker',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-494',
    id: 'comp-494',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'calendar',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-494.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'calendar',
        'date',
        'react day picker',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-495',
    id: 'comp-495',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'calendar',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-495.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'calendar',
        'range calendar',
        'date',
        'react day picker',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-496',
    id: 'comp-496',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'calendar',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-496.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'calendar',
        'date',
        'react day picker',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-497',
    id: 'comp-497',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'calendar',
      'select',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-497.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'calendar',
        'date',
        'react day picker',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-498',
    id: 'comp-498',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'calendar',
      'select',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-498.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'calendar',
        'date',
        'react day picker',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-499',
    id: 'comp-499',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'calendar',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-499.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'calendar',
        'date',
        'week',
        'react day picker',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-500',
    id: 'comp-500',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'calendar',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-500.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'calendar',
        'date',
        'button',
        'react day picker',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-501',
    id: 'comp-501',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'calendar',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-501.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'calendar',
        'date',
        'button',
        'react day picker',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-502',
    id: 'comp-502',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'calendar',
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-502.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'calendar',
        'date',
        'input',
        'react day picker',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-503',
    id: 'comp-503',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'calendar',
      'input',
      'label',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-503.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'calendar',
        'date',
        'input',
        'time',
        'react day picker',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-504',
    id: 'comp-504',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'calendar',
      'collapsible',
      'scroll-area',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-504.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'calendar',
        'date',
        'collapsible',
        'react day picker',
        'radix',
      ],
      style: 1,
    },
  },
  {
    name: 'comp-505',
    id: 'comp-505',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'calendar',
      'scroll-area',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-505.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'calendar',
        'date',
        'time',
        'button',
        'react day picker',
      ],
      colSpan: 3,
      style: 1,
    },
  },
  {
    name: 'comp-506',
    id: 'comp-506',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'calendar',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-506.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'calendar',
        'date',
        'button',
        'react day picker',
      ],
      colSpan: 3,
      style: 1,
    },
  },
  {
    name: 'comp-507',
    id: 'comp-507',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'calendar',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-507.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'calendar',
        'range calendar',
        'date',
        'button',
        'react day picker',
      ],
      colSpan: 3,
      style: 1,
    },
  },
  {
    name: 'comp-508',
    id: 'comp-508',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'calendar',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-508.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'calendar',
        'range calendar',
        'date',
        'react day picker',
      ],
      colSpan: 3,
      style: 1,
    },
  },
  {
    name: 'comp-509',
    id: 'comp-509',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'calendar',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-509.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'calendar',
        'range calendar',
        'date',
        'react day picker',
      ],
      colSpan: 3,
      style: 1,
    },
  },
  {
    name: 'comp-510',
    id: 'comp-510',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'calendar',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-510.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'calendar',
        'date',
        'react day picker',
      ],
      colSpan: 3,
      style: 1,
    },
  },
  {
    name: 'comp-511',
    id: 'comp-511',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'calendar',
      'label',
      'popover',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-511.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'calendar',
        'date',
        'button',
        'picker',
        'react day picker',
      ],
    },
  },
  {
    name: 'comp-512',
    id: 'comp-512',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'calendar',
      'label',
      'popover',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-512.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'calendar',
        'date',
        'button',
        'picker',
        'react day picker',
      ],
    },
  },
  {
    name: 'comp-513',
    id: 'comp-513',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'stepper',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-513.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'stepper',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-514',
    id: 'comp-514',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'stepper',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-514.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'stepper',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-515',
    id: 'comp-515',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'stepper',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-515.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'stepper',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-516',
    id: 'comp-516',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'stepper',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-516.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'stepper',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-517',
    id: 'comp-517',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'stepper',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-517.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'stepper',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-518',
    id: 'comp-518',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'stepper',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-518.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'stepper',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-519',
    id: 'comp-519',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'stepper',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-519.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'stepper',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-520',
    id: 'comp-520',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'stepper',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-520.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'stepper',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-521',
    id: 'comp-521',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'stepper',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-521.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'stepper',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-522',
    id: 'comp-522',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'stepper',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-522.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'stepper',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-523',
    id: 'comp-523',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'stepper',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-523.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'stepper',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-524',
    id: 'comp-524',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'stepper',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-524.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'stepper',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-525',
    id: 'comp-525',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'stepper',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-525.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'stepper',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-526',
    id: 'comp-526',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'stepper',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-526.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'stepper',
        'vertical stepper',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-527',
    id: 'comp-527',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'stepper',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-527.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'stepper',
        'vertical stepper',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-528',
    id: 'comp-528',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'stepper',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-528.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'stepper',
        'vertical stepper',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-529',
    id: 'comp-529',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'stepper',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-529.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'stepper',
        'vertical stepper',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-530',
    id: 'comp-530',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'timeline',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-530.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'timeline',
        'vertical timeline',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-531',
    id: 'comp-531',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'timeline',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-531.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'timeline',
        'vertical timeline',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-532',
    id: 'comp-532',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'timeline',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-532.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'timeline',
        'vertical timeline',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-533',
    id: 'comp-533',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'timeline',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-533.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'timeline',
        'vertical timeline',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-534',
    id: 'comp-534',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'timeline',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-534.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'timeline',
        'vertical timeline',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-535',
    id: 'comp-535',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'timeline',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-535.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'timeline',
        'vertical timeline',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-536',
    id: 'comp-536',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'timeline',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-536.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'timeline',
        'vertical timeline',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-537',
    id: 'comp-537',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'timeline',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-537.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'timeline',
        'vertical timeline',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-538',
    id: 'comp-538',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'timeline',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-538.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'timeline',
        'vertical timeline',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-539',
    id: 'comp-539',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'timeline',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-539.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'timeline',
        'vertical timeline',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-540',
    id: 'comp-540',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'timeline',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-540.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'timeline',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-541',
    id: 'comp-541',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'timeline',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-541.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'timeline',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-542',
    id: 'comp-542',
    entryPath: '',
    type: 'registry:component',
    dependencies: [
      'date-fns',
      '@dnd-kit/core',
      '@dnd-kit/modifiers',
      '@dnd-kit/utilities',
      '@remixicon/react',
    ],
    registryDependencies: [
      'button',
      'calendar',
      'checkbox',
      'dropdown-menu',
      'dialog',
      'input',
      'textarea',
      'label',
      'popover',
      'radio-group',
      'select',
      'sonner',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-542.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/event-calendar/agenda-view.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/event-calendar/calendar-dnd-context.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/event-calendar/constants.ts',
        type: 'component',
      },
      {
        path: 'registry/default/components/event-calendar/day-view.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/event-calendar/draggable-event.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/event-calendar/droppable-cell.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/event-calendar/event-dialog.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/event-calendar/event-item.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/event-calendar/events-popup.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/event-calendar/event-calendar.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/event-calendar/index.ts',
        type: 'component',
      },
      {
        path: 'registry/default/components/event-calendar/month-view.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/event-calendar/types.ts',
        type: 'component',
      },
      {
        path: 'registry/default/components/event-calendar/utils.ts',
        type: 'component',
      },
      {
        path: 'registry/default/components/event-calendar/week-view.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/event-calendar/hooks/use-current-time-indicator.ts',
        type: 'component',
      },
      {
        path: 'registry/default/components/event-calendar/hooks/use-event-visibility.ts',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'calendar',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-543',
    id: 'comp-543',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-543.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-file-upload.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'upload',
        'file',
        'image',
        'drag and drop',
        'avatar',
      ],
    },
  },
  {
    name: 'comp-544',
    id: 'comp-544',
    entryPath: '',
    type: 'registry:component',
    relativeFiles: [
      {
        path: 'registry/default/components/comp-544.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-file-upload.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'upload',
        'file',
        'image',
        'drag and drop',
      ],
      colSpan: 2,
    },
    registryDependencies: [],
  },
  {
    name: 'comp-545',
    id: 'comp-545',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-545.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-file-upload.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'upload',
        'file',
        'image',
        'drag and drop',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-546',
    id: 'comp-546',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-546.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-file-upload.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'upload',
        'file',
        'image',
        'drag and drop',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-547',
    id: 'comp-547',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-547.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-file-upload.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'upload',
        'file',
        'image',
        'drag and drop',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-548',
    id: 'comp-548',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-548.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-file-upload.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'upload',
        'file',
        'image',
        'drag and drop',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-549',
    id: 'comp-549',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-549.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-file-upload.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'upload',
        'file',
        'image',
        'drag and drop',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-550',
    id: 'comp-550',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-550.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-file-upload.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'upload',
        'file',
        'image',
        'drag and drop',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-551',
    id: 'comp-551',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'table',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-551.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-file-upload.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'upload',
        'file',
        'image',
        'drag and drop',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-552',
    id: 'comp-552',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-552.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-file-upload.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'upload',
        'file',
        'image',
        'drag and drop',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-553',
    id: 'comp-553',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-553.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-file-upload.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'upload',
        'file',
        'image',
        'drag and drop',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-554',
    id: 'comp-554',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'cropper',
      'dialog',
      'select',
      'slider',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-554.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/hooks/use-file-upload.ts',
        type: 'hook',
      },
    ],
    meta: {
      tags: [
        'upload',
        'file',
        'image',
        'drag and drop',
        'crop',
        'dialog',
        'slider',
        'zoom',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-555',
    id: 'comp-555',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'cropper',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-555.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'image',
        'crop',
        'zoom',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-556',
    id: 'comp-556',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'cropper',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-556.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'image',
        'crop',
        'zoom',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-557',
    id: 'comp-557',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'cropper',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-557.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'image',
        'crop',
        'zoom',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-558',
    id: 'comp-558',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'cropper',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-558.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'image',
        'crop',
        'zoom',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-559',
    id: 'comp-559',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'cropper',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-559.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'image',
        'crop',
        'zoom',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-560',
    id: 'comp-560',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'cropper',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-560.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'image',
        'crop',
        'zoom',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-561',
    id: 'comp-561',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'cropper',
      'select',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-561.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'image',
        'crop',
        'zoom',
        'slider',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-562',
    id: 'comp-562',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'cropper',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-562.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'image',
        'crop',
        'zoom',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-563',
    id: 'comp-563',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'cropper',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-563.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'image',
        'crop',
        'zoom',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-564',
    id: 'comp-564',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'cropper',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-564.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'image',
        'crop',
        'zoom',
      ],
      colSpan: 2,
    },
  },
  {
    name: 'comp-565',
    id: 'comp-565',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tree',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-565.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tree',
      ],
    },
  },
  {
    name: 'comp-566',
    id: 'comp-566',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tree',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-566.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tree',
      ],
    },
  },
  {
    name: 'comp-567',
    id: 'comp-567',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tree',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-567.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tree',
      ],
    },
  },
  {
    name: 'comp-568',
    id: 'comp-568',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tree',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-568.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tree',
      ],
    },
  },
  {
    name: 'comp-569',
    id: 'comp-569',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tree',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-569.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tree',
      ],
    },
  },
  {
    name: 'comp-570',
    id: 'comp-570',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tree',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-570.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tree',
      ],
    },
  },
  {
    name: 'comp-571',
    id: 'comp-571',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tree',
      'input',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-571.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tree',
        'filter',
        'search',
      ],
    },
  },
  {
    name: 'comp-572',
    id: 'comp-572',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tree',
      'input',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-572.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tree',
        'filter',
        'search',
      ],
    },
  },
  {
    name: 'comp-573',
    id: 'comp-573',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tree',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-573.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tree',
      ],
    },
  },
  {
    name: 'comp-574',
    id: 'comp-574',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tree',
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-574.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tree',
        'button',
      ],
    },
  },
  {
    name: 'comp-575',
    id: 'comp-575',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tree',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-575.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tree',
      ],
    },
  },
  {
    name: 'comp-576',
    id: 'comp-576',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tree',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-576.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tree',
        'menu',
      ],
    },
  },
  {
    name: 'comp-577',
    id: 'comp-577',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'navigation-menu',
      'popover',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-577.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'navbar', 'navigation',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-578',
    id: 'comp-578',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'navigation-menu',
      'popover',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-578.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/logo.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'navbar', 'navigation',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-579',
    id: 'comp-579',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'navigation-menu',
      'popover',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-579.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/logo.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'navbar', 'navigation',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-580',
    id: 'comp-580',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'navigation-menu',
      'popover',
      'input',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-580.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/logo.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'navbar', 'navigation',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-581',
    id: 'comp-581',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'avatar',
      'button',
      'dropdown-menu',
      'navigation-menu',
      'popover',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-581.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/info-menu.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/logo.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/notification-menu.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/user-menu.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'navbar', 'navigation',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-582',
    id: 'comp-582',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'avatar',
      'button',
      'dropdown-menu',
      'navigation-menu',
      'popover',
      'select',
      'tooltip',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-582.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/logo.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/theme-toggle.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/user-menu.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'navbar', 'navigation',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-583',
    id: 'comp-583',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'avatar',
      'button',
      'breadcrumb',
      'dropdown-menu',
      'popover',
      'select',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-583.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/logo.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/notification-menu.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/user-menu.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'navbar', 'navigation',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-584',
    id: 'comp-584',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'avatar',
      'button',
      'dropdown-menu',
      'input',
      'navigation-menu',
      'popover',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-584.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/logo.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/notification-menu.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/user-menu.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'navbar', 'navigation',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-585',
    id: 'comp-585',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'avatar',
      'button',
      'dropdown-menu',
      'input',
      'navigation-menu',
      'popover',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-585.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/logo.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/notification-menu.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/user-menu.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'navbar', 'navigation',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-586',
    id: 'comp-586',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'avatar',
      'button',
      'dropdown-menu',
      'input',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-586.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/logo.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/theme-toggle.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'navbar', 'navigation',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-587',
    id: 'comp-587',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'input',
      'navigation-menu',
      'popover',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-587.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/logo.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'navbar', 'navigation',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-588',
    id: 'comp-588',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'navigation-menu',
      'popover',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-588.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/logo.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/user-menu.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'navbar', 'navigation',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-589',
    id: 'comp-589',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'avatar',
      'button',
      'breadcrumb',
      'dropdown-menu',
      'navigation-menu',
      'popover',
      'select',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-589.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/settings-menu.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/user-menu.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'navbar', 'navigation',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-590',
    id: 'comp-590',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'avatar',
      'button',
      'dropdown-menu',
      'navigation-menu',
      'popover',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-590.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/notification-menu.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/team-switcher.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/user-menu.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'navbar', 'navigation',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-591',
    id: 'comp-591',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'avatar',
      'button',
      'dropdown-menu',
      'select',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-591.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/user-menu.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'navbar', 'navigation',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-592',
    id: 'comp-592',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dropdown-menu',
      'input',
      'label',
      'popover',
      'switch',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-592.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/info-menu.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/notification-menu.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/settings-menu.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'navbar', 'navigation',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-593',
    id: 'comp-593',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'breadcrumb',
      'button',
      'calendar',
      'checkbox',
      'label',
      'popover',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-593.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/date-picker.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/filters.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'navbar', 'navigation',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-594',
    id: 'comp-594',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'button',
      'dropdown-menu',
      'radio-group',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-594.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/app-toggle.tsx',
        type: 'component',
      },
      {
        path: 'registry/default/components/navbar-components/team-switcher.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'navbar', 'navigation',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-595',
    id: 'comp-595',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'avatar',
      'button',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-595.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'navbar', 'navigation',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-596',
    id: 'comp-596',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'badge',
      'button',
      'label',
      'navigation-menu',
      'popover',
      'switch',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-596.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'navbar', 'navigation',
      ],
      colSpan: 3,
    },
  },
  {
    name: 'comp-597',
    id: 'comp-597',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tree',
      'checkbox',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-597.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tree',
        'checkbox',
      ],
    },
  },
  {
    name: 'comp-598',
    id: 'comp-598',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tree',
      'checkbox',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-598.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tree',
        'checkbox',
      ],
    },
  },
  {
    name: 'comp-599',
    id: 'comp-599',
    entryPath: '',
    type: 'registry:component',
    registryDependencies: [
      'tree',
      'checkbox',
    ],
    relativeFiles: [
      {
        path: 'registry/default/components/comp-599.tsx',
        type: 'component',
      },
    ],
    meta: {
      tags: [
        'tree',
        'checkbox',
      ],
    },
  },
]
