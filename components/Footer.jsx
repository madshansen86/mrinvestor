import { useRouter } from 'next/router'
import { Button, Grid, Page, Text, Tooltip } from '@geist-ui/react'

// Icons
import Moon from '@geist-ui/react-icons/moon'
import Sun from '@geist-ui/react-icons/sun'

const PageFooter = ({ themeType, switchTheme }) => {
  const router = useRouter()

  return (
    <Page.Header>
      <Grid.Container gap={1} alignItems="center" justify="space-between">
        <Grid sm>
          <Grid.Container gap={1}>
            <Grid>
              <Text
                h4
                onClick={() => {
                  router.push('/')
                }}
                style={{ margin: '4px 0 0', cursor: 'pointer' }}
              >
                P2P logo
              </Text>
            </Grid>
          </Grid.Container>
        </Grid>

        <Grid style={{ width: 160 }}>
          <Grid.Container gap={1} alignItems="center">
            <Grid>
              <Tooltip text="Toggle light & dark mode" placement="bottom">
                <Button
                  aria-label="Theme"
                  icon={themeType === 'dark' ? <Moon /> : <Sun />}
                  onClick={switchTheme}
                />
              </Tooltip>
            </Grid>
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </Page.Header>
  )
}

export default PageFooter
