import React, { useState } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import useStore from '@/app/store';

export function ComboboxDemoItem() {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);
  const { fetchItems, fetchItemDetails, setItemName, setItemCategory } = useStore();

  const handleSearch = async (term) => {
    setSearchTerm(term);
    if (term.length > 2) {
      try {
        const results = await fetchItems(term);
        setItems(results);
      } catch (error) {
        console.error('Error fetching items:', error);
        setItems([]); // Clear items if there's an error
      }
    } else {
      setItems([]);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {searchTerm || 'Select Product...'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput
            placeholder="Search product..."
            value={searchTerm}
            onValueChange={handleSearch}
          />
          <CommandList>
            <CommandEmpty>No products found.</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.Item_identifier}
                  value={item.Item_name}
                  onSelect={() => {
                    fetchItemDetails(item.Item_identifier);
                    setItemName(item.Item_name);
                    setItemCategory(item.Item_type); // Assuming Item_type is the category
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      searchTerm === item.Item_name ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {item.Item_name} (ID: {item.Item_identifier})
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}