import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { increment, incrementAsync, decrement, decrementAsync } from "../../actions/counter";
import "./styles.css";

const Home = props => (
  <ul>
    <li>
      <a href="#home">Home</a>
    </li>
    <li>
      <a href="#news">News</a>
    </li>
    <li>
      <a href="#contact">Contact</a>
    </li>
    <li style="float:right">
      <a class="active" href="#about">
        About
      </a>
    </li>
  </ul>
);

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push("/about-us")
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
