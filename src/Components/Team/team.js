import React, { useState, useEffect } from 'react';
import faxios from '../../axios';
import Loader from '../api_loader/api_loader';
import { Link } from 'react-router-dom';
import Sidebar from '../Home/Sidebar/Sidebar';
import Footer from '../Footer/footer';

import './team.css';
import Avatar from './Avatar.js';
import Label from './Label.js';

const Team = ({ match }) => {
  const year = match.params.year;
  const axios = faxios();

  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  const people = {
    dir: [],
    hcd: [],
    fct: [],
    oc: [],
    hco: [],
    pr: {
      managers: [],
      executives: [],
    },
    tech: {
      managers: [],
      executives: [],
    },
    design: {
      managers: [],
      executives: [],
    },
    doc: {
      managers: [],
      executives: [],
    },
    spons: {
      managers: [],
      executives: [],
    },
  };

  const { dir, hcd, fct, oc, hco, pr, tech, doc, design, spons } = people;

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { data },
      } = await axios.get(`/team/list/${year}/`);
      console.log(data);
      setState({ data, loading: false });
    };
    fetchData();
  }, []);

  const addPeople = () => {
    state.data.map((el) => {
      if (el.member_type === 'DIR') {
        dir.push(el);
      }

      if (el.member_type === 'HCD') {
        hcd.push(el);
      }

      if (el.member_type === 'FCT') {
        fct.push(el);
      }

      if (el.domain === 'none' && el.member_type === 'OCO') {
        oc.push(el);
      }

      if (el.member_type === 'HCO') {
        hco.push(el);
      }

      if (el.domain === 'pr' && el.member_type === 'EXC') {
        pr.executives.push(el);
      }
      if (el.domain === 'pr' && el.member_type === 'MNG') {
        pr.managers.push(el);
      }

      if (el.domain === 'tech' && el.member_type === 'EXC') {
        tech.executives.push(el);
      }
      if (el.domain === 'tech' && el.member_type === 'MNG') {
        tech.managers.push(el);
      }

      if (el.domain === 'doc' && el.member_type === 'EXC') {
        doc.executives.push(el);
      }
      if (el.domain === 'doc' && el.member_type === 'MNG') {
        doc.managers.push(el);
      }

      if (el.domain === 'design' && el.member_type === 'EXC') {
        design.executives.push(el);
      }
      if (el.domain === 'design' && el.member_type === 'MNG') {
        design.managers.push(el);
      }

      if (el.domain === 'spons' && el.member_type === 'EXC') {
        spons.executives.push(el);
      }
      if (el.domain === 'spons' && el.member_type === 'MNG') {
        spons.managers.push(el);
      }
    });
  };

  addPeople();

  if (state.loading) {
    return (<Loader />);
  }
  else {
    return (
      <div className="teamcontainer">
        <Sidebar />
        <div className="teamPage">
          <h1 className="text-center heading">
            Team of {year}-{year - 2000 + 1}
          </h1>
          <Link className="teamLink" to="/team/yearwise">
            <i className="fa fa-arrow-left mr-1"></i>Previous Year Teams
          </Link>
          <div className="people">
            {year === '2020' && (
              <>
                <div className="director">
                  <h2 className="text-center mt-1">Director</h2>
                  <Avatar data={dir[0]} />
                </div>
                <div className="hcd">
                  <h2 className="text-center mt-5">Head of CDC</h2>
                  <Avatar data={hcd[0]} />
                </div>
                <div className="fct">
                  <h2 className="text-center mt-5">Faculty In Charge</h2>
                  <Avatar data={fct[0]} />
                </div>
              </>
            )}

            {/* Overall Coordinators */}
            {oc.length ? (
              <div className="mt-5">
                <h2 className="text-center">Overall Coordinators</h2>
                <div className="photo_container_">
                  {oc.map((el) => (
                    <div key={el.id} className="av_box">
                      <Avatar data={el} />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
                ''
              )}

            {/* Head Coordinators */}
            <div className="add_margin">
              <h2 className="text-center">Head Coordinators</h2>
              <div className="photo_container_">
                {hco.map((el) => (
                  <div key={el.id} className="av_box">
                    <Avatar data={el} />
                  </div>
                ))}
              </div>
            </div>

            {year === '2020' && (
              <>
                {/* Public Relation and Marketing Managers */}
                <div className="add_margin">
                  <h2 className="text-center">
                    Public Relation and Marketing Managers
                    </h2>
                  <div className="manager_container_ mt-3">
                    {pr.managers.map((el) => (
                      <div>
                        <Label data={el} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Team Managers  */}
                <div className="add_margin">
                  <h2 className="text-center">Technical Team Managers</h2>
                  <div className="manager_container_ mt-3">
                    {tech.managers.map((el) => (
                      <div>
                        <Label data={el} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Design Team Managers   */}
                <div className="add_margin">
                  <h2 className="text-center">Design Team Managers</h2>
                  <div className="manager_container_ mt-3">
                    {design.managers.map((el) => (
                      <div>
                        <Label data={el} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Documentation Team Manager */}
                <div className="add_margin">
                  <h2 className="text-center">Documentation Team Manager </h2>
                  <div className="manager_container_ mt-3">
                    {doc.managers.map((el) => (
                      <div>
                        <Label data={el} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sponsorship and Brand Management Managers  */}
                <div className="add_margin">
                  <h2 className="text-center">
                    Sponsorship and Brand Management Managers
                    </h2>
                  <div className="manager_container_ mt-3">
                    {spons.managers.map((el) => (
                      <div>
                        <Label data={el} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Public Relation and Marketing Executives  */}
                <div className="add_margin">
                  <h2 className="text-center">
                    Public Relation and Marketing Executives
                    </h2>
                  <div className="manager_container_ mt-3">
                    {pr.executives.map((el) => (
                      <div>
                        <Label data={el} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Team Executives  */}
                <div className="add_margin">
                  <h2 className="text-center">Technical Team Executives</h2>
                  <div className="manager_container_ mt-3">
                    {tech.executives.map((el) => (
                      <div>
                        <Label data={el} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Design Team Executives  */}
                <div className="add_margin">
                  <h2 className="text-center">Design Team Executives</h2>
                  <div className="manager_container_ mt-3">
                    {design.executives.map((el) => (
                      <div>
                        <Label data={el} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Documentation Team Executives  */}
                <div className="add_margin">
                  <h2 className="text-center">Documentation Team Executives</h2>
                  <div className="manager_container_ mt-3">
                    {doc.executives.map((el) => (
                      <div>
                        <Label data={el} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sponsorship and Brand Management Executives  */}
                <div className="add_margin">
                  <h2 className="text-center">
                    Sponsorship and Brand Management Executives
                    </h2>
                  <div className="manager_container_ mt-3">
                    {spons.executives.map((el) => (
                      <div>
                        <Label data={el} />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Team;
