import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import styles from './Loading.module.css';
import MAnimada from '../../assets/images/M-animada.gif'
/**
 * Animacion cuando carga algun proceso
 */
const Loading = props => {
  const showLoading = props.show
  return (
    <Dialog open={showLoading}>
      <Box className={styles.container__Loading}>
        <img src={MAnimada} alt="Manimada" />
      </Box>
    </Dialog>
  )
}

Loading.propTypes = {
  show: PropTypes.bool.isRequired,
}

export default Loading
