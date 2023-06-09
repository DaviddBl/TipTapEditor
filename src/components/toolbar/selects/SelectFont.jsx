import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';


const fontFamilies = [
    { name: 'Arial', value: 'Arial' },
    { name: 'Comic Sans', value: 'Comic Sans MS, Comic Sans' },
    { name: 'Monospace', value: 'monospace' },
    { name: 'Default', value: 'Default' },
];

export default function SelectFont({ editor }) {
    const [selectedFontFamily, setSelectedFontFamily] = useState('Default');

    const handleFontFamilyChange = (fontFamily) => {
        setSelectedFontFamily(fontFamily);
        editor.chain().focus().setFontFamily(fontFamily).run();
    };

    return (
        <div className="w-48">
            <Listbox value={selectedFontFamily} onChange={handleFontFamilyChange}>
                <div className="relative">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg border border-gray-200 bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">{selectedFontFamily}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {fontFamilies.map((fontFamily) => (
                                <Listbox.Option
                                    key={fontFamily.value}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                                        }`
                                    }
                                    value={fontFamily.value}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                            >
                                                {fontFamily.name}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                                                    <CheckIcon className="h-4 w-4" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}
