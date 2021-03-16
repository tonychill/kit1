import { useState } from "react";
import { enGB } from "date-fns/locale";
import { DateRangePicker, START_DATE, END_DATE } from "react-nice-dates";
import Input from "../../core/Input";
function DatePicker({ startDate, endDate, setStartDate, setEndDate }) {
  return (
    <DateRangePicker
      startDate={startDate}
      endDate={endDate}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
      minimumDate={new Date()}
      minimumLength={1}
      format="dd MMM yyyy"
      locale={enGB}
    >
      {({ startDateInputProps, endDateInputProps, focus }) => {
        return (
          <div className="date-range flex justify-between">
            {/* <Input></Input> TODO: mod Input component to work with date picker.  */}
            <Input className={"input" + (focus === START_DATE ? " -focused" : "")} otherProps={startDateInputProps} placeholder="Start date" />
            <span className="date-range_arrow" />
            <Input className={"input" + (focus === END_DATE ? " -focused" : "")} otherProps={endDateInputProps} placeholder="End date" />
          </div>
        );
      }}
    </DateRangePicker>
  );
}

export default DatePicker;
