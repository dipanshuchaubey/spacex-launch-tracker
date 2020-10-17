import React from 'react'

const Launch = ({ data }) => {
  return (
    <section>
      <div className="lead-image">
        <img className="image" src={data.links.mission_patch_small} />
      </div>

      <h3 className="launch-heading">{data.mission_name}</h3>

      <p className="launch-detail-head">
        Mission IDs: <span className="launch-detail-item">154545</span>
      </p>
      <p className="launch-detail-head">
        Launch Year:{' '}
        <span className="launch-detail-item">{data.launch_year}</span>
      </p>
      <p className="launch-detail-head">
        Successful Launch:{' '}
        <span className="launch-detail-item">
          {data.launch_success ? 'True' : 'False'}
        </span>
      </p>
      <p className="launch-detail-head">
        Successful Landing:{' '}
        <span className="launch-detail-item">
          {data.launch_success ? 'True' : 'NA'}
        </span>
      </p>
    </section>
  )
}

export default Launch
