interface IGridListStatus<T> {
    records: T[];
    renderItem: ( record: T ) => React.ReactNode
}
const GridList = <T,>({ records, renderItem }: IGridListStatus<T>): React.ReactNode => {

  const renderList = records.length > 0? records.map((record, index) => <div key={index}>{renderItem(record)}</div>) : 'There are no categories';
  return (
    <>
      {renderList}          
    </>
  )
}

export default GridList