import React, { useEffect } from "react";
import Blog from "../components/home/Blog";
import Event from "../components/home/Event";
import Microblog from "../components/home/Microblog";
import Hero from "../components/home/Hero";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchEvents,
  fetchBlogs,
  fetchSquads,
  fetchBatch,
} from "../redux/actions/userActions";
import Loading from "../components/parts/Loading";

const Home = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.eventReducers.events);
  const batches = useSelector((state) => state.batchReducers.batch);
  const squads = useSelector((state) => state.squadReducers.squads);
  const blogs = useSelector((state) => state.blogReducers.blogs);

  useEffect(() => {
    dispatch(fetchEvents());
    dispatch(fetchBlogs());
    dispatch(fetchSquads());
    dispatch(fetchBatch());
  }, []);

  return (
    <>
      {events.length == 0 &&
      batches == 0 &&
      squads.length == 0 &&
      blogs == 0 ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Event />
          <Blog />
          {/* <Microblog /> */}
        </>
      )}
    </>
  );
};

export default Home;
