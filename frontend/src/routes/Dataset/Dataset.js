import React, { useMemo, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { ThemeProvider } from '@mui/material'

import AtlasBreadcrumbs from 'components/AtlasBreadcrumbs'
import CompareBtn from 'components/Header/CompareBtn'
import Dashboard from 'components/Dashboard'
import Map from 'components/Map/'
import SearchInput from 'components/Header/SearchInput'
import { createDataSetSelector } from 'store/modules/dataset'
import { getSearchList } from 'store/modules/search'
import { setApiData } from '../../store/modules/api'
import { homeBreadcrumbLink } from 'components/AtlasBreadcrumbs/AtlasBreadcrumbs'
import initTheme from 'utils/theme'
import useCompareList from 'hooks/useCompareList'
import useBusinessSimulator from 'hooks/useBusinessSimulator'

function Dataset() {
  const dispatch = useDispatch()
  const params = useParams()
  const { datasetId } = params || {}
  const dataset = useSelector(createDataSetSelector(datasetId))
  const [selectedFeature, setSelectedFeature] = useState(null)
  const [highlightedFeature, setHighlightedFeature] = useState(null)
  const {
    comparisonList,
    addToComparison,
    removeFromComparison,
    canAddToComparison,
    setGeoJsonMap,
    geoJsonMap,
    compareListOpen,
    setCompareListOpen,
  } = useCompareList(datasetId)
  const {
    businessLocation,
    setBusinessLocation,
    businessCount,
    setBusinessCount,
    businessType,
    setBusinessType,
    businessTypeTitle,
    businessSimulatorOpen,
    openBusinessSimulator,
    closeBusinessSimulator,
    simulating,
    setSimulating,
  } = useBusinessSimulator(datasetId)

  const data = dataset?.exploreLayout
  const DataSetComponent = getDatasetComponent(data?.type)
  const datasetName = dataset?.title || ''
  const searchPlaceholder = data?.searchPlaceholder || ''
  const theme = useMemo(() => initTheme(data?.theme), [data?.theme])

  const handleSearchChange = useCallback(
    value => {
      if (!value) {
        dispatch(setApiData({ data: [], selectorKey: 'searchList' }))
        return
      }

      dispatch(getSearchList({ datasetId, params: { q: value } }))
    },
    [dispatch, datasetId],
  )

  return (
    <ThemeProvider theme={theme}>
      <Dashboard
        headerConfig={{
          searchPlaceholder,
          content: {
            left: <AtlasBreadcrumbs links={[homeBreadcrumbLink, { text: datasetName }]} />,
            right: (
              <>
                <SearchInput
                  placeholder={searchPlaceholder}
                  onChange={handleSearchChange}
                  onSelect={setSelectedFeature}
                  onHighlightChange={setHighlightedFeature}
                />

                <CompareBtn
                  comparisonList={comparisonList}
                  removeFromComparison={removeFromComparison}
                  onSelect={setSelectedFeature}
                  onHighlightChange={setHighlightedFeature}
                  setGeoJsonMap={setGeoJsonMap}
                  geoJsonMap={geoJsonMap}
                  compareListOpen={compareListOpen}
                  setCompareListOpen={setCompareListOpen}
                  datasetId={datasetId}
                />
              </>
            ),
          },
        }}>
        <div>
          <DataSetComponent
            config={data}
            datasetId={datasetId}
            selectedFeature={selectedFeature}
            highlightedFeature={highlightedFeature}
            setSelectedFeature={setSelectedFeature}
            setHighlightedFeature={setHighlightedFeature}
            addToComparison={addToComparison}
            canAddToComparison={canAddToComparison}
            assistantProps={{
              businessLocation,
              setBusinessLocation,
              businessCount,
              setBusinessCount,
              businessType,
              setBusinessType,
              businessTypeTitle,
              businessSimulatorOpen,
              openBusinessSimulator,
              closeBusinessSimulator,
              simulating,
              setSimulating,
            }}
          />
        </div>
      </Dashboard>
    </ThemeProvider>
  )
}

function getDatasetComponent(datasetId) {
  switch (datasetId) {
    case 'map':
      return Map
    default:
      return () => null
  }
}

export default Dataset
