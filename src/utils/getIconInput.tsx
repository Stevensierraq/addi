import React from 'react'
import {
  FaCalendar,
  FaEnvelope,
  FaHashtag,
  FaIdCard,
  FaLocationArrow,
  FaPhone,
  FaUser,
} from 'react-icons/fa'

export const getIcon: { [icon: string]: any } = {
  user: <FaUser size={18} />,
  email: <FaEnvelope size={18} />,
  dni: <FaIdCard size={18} />,
  number: <FaHashtag size={18} />,
  date: <FaCalendar size={18} />,
  phone: <FaPhone size={18} />,
  address: <FaLocationArrow size={18} />,
}
