import { ResponsiveBar } from '@nivo/bar';
import { PopularityData } from '../types/artist';
import '../styles/styles.css';
import '../styles/basic.css';


interface StatsProps {
  data: PopularityData[];
}

const Stats = ({ data }: StatsProps) => {
  const chartData = data
    .map(item => ({
      city: item.city,
      value: item.value
    }))
    .reverse();

  return (
    <div className="col stats">
      <div className="col-content">
        <div className="stats-sheet" style={{height: '258px'}}>
          <label>Most popular in</label>
          <ResponsiveBar
            data={chartData}
            keys={['value']}
            indexBy="city"
            layout="horizontal"
            colors={['#000000']}
            enableGridY={false}
            enableLabel={false}
            padding={0.9}
            borderRadius={0}
            margin={{ top: 20 }}
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
                  border: '1px solid #ccc',
                  fontSize: '14px',
                  font: 'suisseInt',
                  fontWeight: 400
                }}
              >
                {value}%
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
                      fill="#F5F5F5"
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
                        fill: '#000',
                        fontSize: '14px',
                        fontWeight: 500
                      }}
                    >
                      {bar.data.data.city}
                    </text>
                  ))}
                </g>
              ),
              'legends'
            ]}
          />
      </div>
      </div>
    </div>
  );
};

export default Stats;