const FlexBox = ({
  alignItems = 'stretch ',
  children,
  flexDirection = 'row',
  gap
}) => {
  return (
    <div style={{ alignItems, display: 'flex', flexDirection, gap }}>
      {children}
    </div>
  );
}

export default FlexBox;
