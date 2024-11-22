import { ResponsiveBar } from '@nivo/bar';
import '../styles/styles.css';
import { BeatportGenre } from '../types/artist';

interface VoteSubgenresProps {
  options: BeatportGenre[];
}

const VoteSubgenres: React.FC<VoteSubgenresProps> = ({options}) => {
  const chartData = options
    .map(option => ({
      name: option.name,
      value: option.id
    }))
    .reverse();

  return (
    <div className="tooltip-wrapper">
      <button className="btn btn-add">Add subgenre</button>
      <div className="tooltip">
        <h3>Vote for subgenres</h3>
        <p>Don't agree with the subgenres? Add the ones you think are missing or vote for existing to get yours on top!</p>
        <div className="stats-sheet" style={{ height: '160px' }}>
          <ResponsiveBar
            data={chartData}
            keys={['value']}
            indexBy="name"
            layout="horizontal"
            colors={['#ffffff']}
            enableGridY={false}
            enableLabel={false}
            padding={0.9}
            borderRadius={0}
            maxValue={100}
            axisTop={null}
            axisRight={null}
            axisBottom={null}
            axisLeft={null}
            enableGridX={false}
            isInteractive={true}
            tooltip={({ value }) => (
              <div
                style={{
                  padding: '4px 6px',
                  background: 'white',
                  color: 'black',
                  border: '1px solid #ccc',
                  fontSize: '14px',
                  font: 'suisseInt',
                  fontWeight: 400
                }}
              >
                {value} votes
              </div>
            )}
            layers={[
              'grid',
              ({ bars, xScale }) => (
                <g>
                  {bars.map(bar => (
                    <rect
                      key={`${bar.key}-background`}
                      x={0}
                      y={bar.y}
                      width={xScale(100)}
                      height={bar.height}
                      fill="#231f20"
                      rx={0}
                    />
                  ))}
                </g>
              ),
              'bars',
              ({ bars }) => (
                <g>
                  {bars.map(bar => (
                    <text
                      key={`${bar.key}-label`}
                      x={0}
                      y={bar.y - 24}
                      textAnchor="start"
                      alignmentBaseline="before-edge"
                      style={{
                        fill: 'white',
                        fontSize: '11px',
                        fontWeight: 500,
                        textTransform: 'uppercase'
                      }}
                    >
                      {bar.data.data.name}
                    </text>
                  ))}
                </g>
              ),
              'legends'
            ]}
          />
        </div>
        <p>
          <button className="btn btn-shadow">Vote now</button>
        </p>
      </div>
    </div>
  );
}

export default VoteSubgenres;