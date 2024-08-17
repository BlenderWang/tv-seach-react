import React from "react";

interface SearchbarProps {
  query: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Searchbar = ({ query, onChange, onSubmit }: SearchbarProps) => {
  return (
    <form
      className="px-2 flex justify-between items-center"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        className="rounded-xl p-3"
        name="query"
        value={query}
        onChange={onChange}
        placeholder="i.e. Dorahodora"
      />
    </form>
  );
};

export default Searchbar;
