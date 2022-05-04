import Link from "next/link";
import {
  MdSpeed,
  MdDevicesOther,
  MdLightbulbOutline,
  MdOutlineFastForward,
} from "react-icons/md";
export default function About() {
  return (
    <main>
      <h1>Some information about me</h1>
      <div className='priority'>
        <ul className='priority__list'>
          <li className='priority__item'>
            <div className='priority__icon'>
              <MdSpeed />
            </div>
            <div className='priority__title'>Fast</div>
            <p className='priority__description'>
              Fast load times and lag free interaction, my highest priority.
            </p>
          </li>
          <li className='priority__item'>
            <div className='priority__icon'>
              <MdDevicesOther />
            </div>
            <div className='priority__title'>Responsive</div>
            <p className='priority__description'>
              My layouts will work on any device, big or small.
            </p>
          </li>
          <li className='priority__item'>
            <div className='priority__icon'>
              <MdLightbulbOutline />
            </div>
            <div className='priority__title'>Intuitive</div>
            <p className='priority__description'>
              Strong preference for easy to use, intuitive UX/UI.
            </p>
          </li>
          <li className='priority__item'>
            <div className='priority__icon'>
              <MdOutlineFastForward />
            </div>
            <div className='priority__title'>Dynamic</div>
            <p className='priority__description'>
              Websites don't have to be static, I love making pages come to
              life.
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}
