import React from "react";

interface SearchbarProps {
    query: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Searchbar = ({ query, onChange, onSubmit }: SearchbarProps) => {
    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <input
                    type="text"
                    className="input"
                    name="query"
                    value={query}
                    onChange={onChange}
                    placeholder="i.e. Dorahodora"
                />
                <button className="button" type="submit">
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </div>
    );
};

export default Searchbar;
