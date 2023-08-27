import React from 'react'
import OptionDriver from '../OptionDriver'
import { useSelector, useDispatch } from 'react-redux'
import { getTeam } from '../../../utils/store/Partner/selectors/AuthSelectors'
import {Select} from './atoms'
import { selectEmployee } from '../../../utils/store/Partner/actions/AuthActions'

function SelectDriver() {
     const team = useSelector(getTeam)
      const dispatch = useDispatch()

      const changeDriver = (e) => {
          dispatch(selectEmployee(e.target.value))
      }

      console.log(team)
      return (
          <>
              <Select onChange={changeDriver}>
                  <option value="0">Tous les Chauffeurs</option>
                  {
                      team.map((driver) => {
                          console.log(driver)
                          return <OptionDriver key={driver.id} {...driver} />
                      })
                  }
              </Select>
          </>
      )
}

export default SelectDriver