export const DataSection = () => {
  return (
    <div>
      <h4>All customers</h4>
      <select>
        <option value="all_members"></option>
        <option value="active_members"></option>
        <option value="inactive_members"></option>
      </select>
    </div>
  );
};
