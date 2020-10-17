import React from 'react'

const Launch = ({ data }) => {
  return (
    <section>
      <div className="lead-image">
        <img
          className="image"
          src={data.links.mission_patch_small}
          alt={data.mission_name}
        />
      </div>

      <h3 className="launch-heading">{data.mission_name}</h3>

      <p className="launch-detail-head">
        Mission IDs:{' '}
        {Object.keys(data.mission_id).length === 0 && (
          <span className="launch-detail-item">NA</span>
        )}
        <ul>
          {data.mission_id.map(id => (
            <li className="launch-detail-item">{id}</li>
          ))}
        </ul>
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
