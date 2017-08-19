import React from 'react';
import { connect } from 'react-redux';
import { selectOrder, toggleDoneFilter } from '../actions';

function TodoConditions({ sortBy, doneFilter, onOrderChange, onDoneFilterChange }) {
  return (
    <div className="form-inline">
      <div className="form-group">
        <label>sort by:&nbsp;
          <select className="form-control" value={sortBy} onChange={onOrderChange}>
            <option value="due_date-asc">due date(asc)</option>
            <option value="due_date-desc">due date(desc)</option>
            <option value="created_at-asc">created at(asc)</option>
            <option value="created_at-desc">created at(desc)</option>
          </select>
        </label>
      </div>&nbsp;
      <div className="form-group">
        <label>done:&nbsp;
          <input type="checkbox" checked={doneFilter} onChange={onDoneFilterChange}/>
        </label>
      </div>
    </div>
  );
}

export default connect(
  (state) => ({
    sortBy: state.app.sortBy,
    doneFilter: state.app.doneFilter,
  }),
  (dispatch, ownProps) => ({
    onOrderChange(event) {
      dispatch(selectOrder(event.target.value));
    },
    onDoneFilterChange() {
      dispatch(toggleDoneFilter());
    },
  }),
)(TodoConditions);
