import React from "react";

const FilterBar = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="filter-bar">
      <input
        type="text"
        name="search"
        placeholder="Search tasks"
        value={filters.search}
        onChange={handleFilterChange}
      />
      <select
        name="category"
        value={filters.category}
        onChange={handleFilterChange}
      >
        <option value="">All Categories</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="study">Study</option>
      </select>
      <select
        name="priority"
        value={filters.priority}
        onChange={handleFilterChange}
      >
        <option value="">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
};

export default FilterBar;
