export function filterByStatus(items, filterStatus) {
  if (filterStatus === 'all') return items;
  if (filterStatus === 'active') return items.filter(item => item.isActive === true);
  if (filterStatus === 'inactive') return items.filter(item => item.isActive === false);
  return items; // fallback
}
