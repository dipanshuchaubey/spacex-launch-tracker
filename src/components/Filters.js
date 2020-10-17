import React, { useState } from 'react'

const Filters = ({ cb }) => {
  const years = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020
  ]

  const [activeFiler, setActiveFilter] = useState({
    launchSuccess: null,
    landSuccess: null,
    launchYear: null
  })

  return (
    <section>
      <h3 className="section-heading">Filters</h3>

      <div>
        <p className="sub-heading">Lauch Year</p>
        <div className="horizontal-line"></div>

        {years.map(year => (
          <button
            onClick={() => {
              cb({ launchYear: year })
              setActiveFilter({ ...activeFiler, launchYear: year })
            }}
            className={
              activeFiler.launchYear === year
                ? 'filter-button selected'
                : 'filter-button'
            }
          >
            {year}
          </button>
        ))}
      </div>

      <div>
        <p className="sub-heading">Successful Lauch</p>

        <button
          onClick={() => {
            cb({ launchSuccess: true })
            setActiveFilter({ ...activeFiler, launchSuccess: true })
          }}
          className={
            activeFiler.launchSuccess
              ? 'filter-button selected'
              : 'filter-button'
          }
        >
          True
        </button>

        <button
          onClick={() => {
            cb({ launchSuccess: false })
            setActiveFilter({ ...activeFiler, launchSuccess: false })
          }}
          className={
            activeFiler.launchSuccess === false
              ? 'filter-button selected'
              : 'filter-button'
          }
        >
          False
        </button>
      </div>

      <div>
        <p className="sub-heading">Successful Landing</p>

        <button
          onClick={() => {
            cb({ landSuccess: true })
            setActiveFilter({ ...activeFiler, landSuccess: true })
          }}
          className={
            activeFiler.landSuccess ? 'filter-button selected' : 'filter-button'
          }
        >
          True
        </button>

        <button
          onClick={() => {
            cb({ landSuccess: false })
            setActiveFilter({ ...activeFiler, landSuccess: false })
          }}
          className={
            activeFiler.landSuccess === false
              ? 'filter-button selected'
              : 'filter-button'
          }
        >
          False
        </button>
      </div>
    </section>
  )
}

export default Filters
