import React, { useEffect, useRef } from "react";

import "./style.css";
import { constants } from "stateManagment/actions/cases";
import { connect } from "react-redux";
import {
  getSummaryCasesList,
  getGlobalCases,
} from "stateManagment/reselect/cases";
import * as d3 from "d3";

const MyD3Component = (props) => {
  /* The useRef Hook creates a variable that "holds on" to a value across rendering
     passes. In this case it will hold our component's SVG DOM element. It's
     initialized null and React will assign it later (see the return statement) */
  const d3Container = useRef(null);

  /* The useEffect Hook is for running side effects outside of React,
     for instance inserting elements into the DOM using D3 */
  useEffect(
    () => {
      if (props.data && d3Container.current) {
        const svg = d3.select(d3Container.current)
        .style("background", "#e1e1e1");

        // Bind D3 data
        const update = svg.append("g").selectAll("text").data(props.data);

        // Enter new D3 elements
        update
          .enter()
          .append("text")
          .attr("x", (d, i) => i * 25)
          .attr("y", 40)
          .style("font-size", 24)
          .text((d) => d);

        // Update existing D3 elements
        update.attr("x", (d, i) => i * 40).text((d) => d);

        // Remove old D3 elements
        update.exit().remove();
      }
    },

    /*
          useEffect has a dependency array (below). It's a list of dependency
          variables for this useEffect block. The block will run after mount
          and whenever any of these variables change. We still have to check
          if the variables are valid, but we do not have to compare old props
          to next props to decide whether to rerender.
      */
    [props.data, d3Container.current]
  );

  return (
    <svg className="d3-component" width={400} height={200} ref={d3Container} />
  );
};

const App = ({ cases, globalCases, getAllCharacter }) => {
  useFetching(getAllCharacter);
  console.log(cases);
  return (
    <div className="my-app">
      <MyD3Component data={[2, 2, 3]} />
    </div>
  );
};

const useFetching = (someFetchActionCreator) => {
  useEffect(() => {
    someFetchActionCreator();
  }, []);
};

const mapStateToProps = (state) => {
  return {
    cases: getSummaryCasesList(state),
    globalCases: getGlobalCases(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCharacter: () => dispatch({ type: constants.FETCH_SUMMARY_CASES }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
