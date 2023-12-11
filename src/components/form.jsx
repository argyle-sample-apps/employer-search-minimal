import { useState } from "react";
import { useArgyleLink } from "../hooks/use-argyle-link";
import { useSearch } from "../hooks/use-search";
import { Combobox } from "./combobox";
import { Paragraph, Subheading } from "./typography";

export const Form = () => {
  const [query, setQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const { linkInstance } = useArgyleLink({
    selectedItemId: selectedItem ? selectedItem.id : undefined,
  });

  const { data, isLoading } = useSearch(query);

  const handleLinkOpen = () => {
    if (linkInstance) {
      linkInstance.open();
    }
  };

  return (
    <main className="mx-auto mt-4 max-w-lg lg:mt-20">
      <div className="rounded p-2">
        <Combobox
          isLoading={isLoading}
          label="Employer search"
          placeholder="Where do you work?"
          items={data?.results || []}
          setQuery={setQuery}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
        {selectedItem && (
          <div className="mt-2 mb-6 rounded bg-white p-3">
            <Subheading className="mb-3">
              Let&apos;s connect to your employer online.
            </Subheading>
            <Paragraph className="mb-6">
              Login to your employers online portal to verify your income
              without any extra paperwork.
            </Paragraph>
            <div className="mb-4 flex">
              <button
                className="px-2 py-1 bg-black text-white rounded"
                onClick={handleLinkOpen}
              >
                Connect now
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
