import React from 'react';
import { FaChevronLeft, FaGithub, FaPhoneAlt, FaEnvelope, FaStar } from 'react-icons/fa';
import { BsPaperclip } from "react-icons/bs";
import { Button } from '../../common/Button/Button';


export const StudentCV = () => {

  const courseCompletion = 2;
  const courseEngagement = 3;
  const projectDegree = 4;
  const teamProjectDegree = 5;
  const studentGithub = 'Ami777';
  const imageStudent = `https://github.com/${studentGithub}.png`;
  const githubPage = `https://github.com/${studentGithub}`;
  const isStudent = false;
  const portfolioUrls = ['https://github.com'];
  const projectUrls = ['https://github.com/ezterr/head-hunter-fe','https://github.com/ezterr/head-hunter-be'];
  const bonusProjectUrls = ['https://github.com'];

  return (
    <div className="student-cv">
      <div className="main" >
        {isStudent
          ? null
          : <div className="main__go-back">
            <FaChevronLeft/>
            <p>Wróć</p>
          </div>
        }
        <div className="main__left">
          <div className="student">
            <img className="student__logo" src={imageStudent} alt="Avatar studenta"/>
            <p className="student__name">Jan Kowalski</p>
            <div className="student__github">
              <FaGithub className="student__github-icon"/>
              <a className="student__github-link" href={githubPage} target="_blank" rel="noreferrer">{studentGithub}</a>
            </div>
          </div>
          <div className="student-contact">
            <div className="student-contact__box">
              <FaPhoneAlt className="student-contact__box-icon"/>
              <p className="student-contact__box-text">+48 566 072 227</p>
            </div>
            <div className="student-contact__box">
              <FaEnvelope className="student-contact__box-icon"/>
              <p className="student-contact__box-text">jankowalski@gmail.com</p>
            </div>
          </div>
          <div className="student-info">
            <h2 className="student-info-title">O mnie</h2>
            <p className="student-info-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo</p>
          </div>
          <div className="btn-box">
            <Button
              textName="Brak zainteresowania"
              className="btn"
            />
            <Button
              textName="Zatrudniony"
              className="btn"
            />
          </div>
        </div>
        <div className="main__right">
          <div className="title">
            <h2 className="title__title">Oceny</h2>
          </div>
          <div className="ratings">
            <div className="ratings__container">
              <h3 className="ratings__container-title">Ocena przejścia kursu</h3>
              <div className="ratings__container-box">
                <p
                  className="ratings__container-box-text"
                >
                  {courseCompletion}
                  <span className='ratings__container-box-text-span'>/5</span>
                </p>
                <div className="ratings__container-box-stars">
                  <FaStar style={{ color: courseCompletion < 1 ? '#4D4D4D' : '#E02735' }}/>
                  <FaStar style={{ color: courseCompletion < 2 ? '#4D4D4D' : '#E02735' }}/>
                  <FaStar style={{ color: courseCompletion < 3 ? '#4D4D4D' : '#E02735' }}/>
                  <FaStar style={{ color: courseCompletion < 4 ? '#4D4D4D' : '#E02735' }}/>
                  <FaStar style={{ color: courseCompletion < 5 ? '#4D4D4D' : '#E02735' }}/>
                </div>
              </div>
            </div>
            <div className="ratings__container">
              <h3 className="ratings__container-title">Ocena aktywności i zaangażowania na kusie</h3>
              <div className="ratings__container-box">
                <p
                  className="ratings__container-box-text"
                >
                  {courseEngagement}
                  <span className='ratings__container-box-text-span'>/5</span>
                </p>
                <div className="ratings__container-box-stars">
                  <FaStar style={{ color: courseEngagement < 1 ? '#4D4D4D' : '#E02735' }}/>
                  <FaStar style={{ color: courseEngagement < 2 ? '#4D4D4D' : '#E02735' }}/>
                  <FaStar style={{ color: courseEngagement < 3 ? '#4D4D4D' : '#E02735' }}/>
                  <FaStar style={{ color: courseEngagement < 4 ? '#4D4D4D' : '#E02735' }}/>
                  <FaStar style={{ color: courseEngagement < 5 ? '#4D4D4D' : '#E02735' }}/>
                </div>
              </div>
            </div>
            <div className="ratings__container">
              <h3 className="ratings__container-title">Ocena kodu w projekcie własnym</h3>
              <div className="ratings__container-box">
                <p
                  className="ratings__container-box-text"
                >
                  {projectDegree}
                  <span className='ratings__container-box-text-span'>/5</span>
                </p>
                <div className="ratings__container-box-stars">
                  <FaStar style={{ color: projectDegree < 1 ? '#4D4D4D' : '#E02735' }}/>
                  <FaStar style={{ color: projectDegree < 2 ? '#4D4D4D' : '#E02735' }}/>
                  <FaStar style={{ color: projectDegree < 3 ? '#4D4D4D' : '#E02735' }}/>
                  <FaStar style={{ color: projectDegree < 4 ? '#4D4D4D' : '#E02735' }}/>
                  <FaStar style={{ color: projectDegree < 5 ? '#4D4D4D' : '#E02735' }}/>
                </div>
              </div>
            </div>
            <div className="ratings__container">
              <h3 className="ratings__container-title">Ocena pracy w zespole Scrum</h3>
              <div className="ratings__container-box">
                <p
                  className="ratings__container-box-text"
                >
                  {teamProjectDegree}
                  <span className='ratings__container-box-text-span'>/5</span>
                </p>
                <div className="ratings__container-box-stars">
                  <FaStar style={{ color: teamProjectDegree < 1 ? '#4D4D4D' : '#E02735' }}/>
                  <FaStar style={{ color: teamProjectDegree < 2 ? '#4D4D4D' : '#E02735' }}/>
                  <FaStar style={{ color: teamProjectDegree < 3 ? '#4D4D4D' : '#E02735' }}/>
                  <FaStar style={{ color: teamProjectDegree < 4 ? '#4D4D4D' : '#E02735' }}/>
                  <FaStar style={{ color: teamProjectDegree < 5 ? '#4D4D4D' : '#E02735' }}/>
                </div>
              </div>
            </div>
          </div>
          <div className="title">
            <h2 className="title__title">Oczekiwania w stosunku do zatrudnienia</h2>
          </div>
          <div className='employment'>
            <div className='employment__container'>
              <h3 className='employment__container-title'>Preferowane miejsce pracy</h3>
              <p className='employment__container-text'>Biuro</p>
            </div>
            <div className='employment__container'>
              <h3 className='employment__container-title'>Docelowe miasto, gdzie chce pracować kandydat</h3>
              <p className='employment__container-text'>Warszawa</p>
            </div>
            <div className='employment__container'>
              <h3 className='employment__container-title'>Oczekiwany typ kontraktu </h3>
              <p className='employment__container-text'>Umowa o pracę </p>
            </div>
            <div className='employment__container'>
              <h3 className='employment__container-title'>Oczekiwane wynagrodzenie miesięczne netto</h3>
              <p className='employment__container-text'>8 000 zł</p>
            </div>
            <div className='employment__container'>
              <h3 className='employment__container-title'>Zgoda na odbycie bezpłatnych praktyk / stażu na początek</h3>
              <p className='employment__container-text'>TAK</p>
            </div>
            <div className='employment__container'>
              <h3 className='employment__container-title'>Komercyjne doświadczenie w programowaniu</h3>
              <p className='employment__container-text'>6 miesięcy</p>
            </div>
          </div>
          <div className="title">
            <h2 className="title__title">Edukacja</h2>
          </div>
          <div className='description'>
            <p className='description__text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="title">
            <h2 className="title__title">Kursy</h2>
          </div>
          <div className='description'>
            <p className='description__text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="title">
            <h2 className="title__title">Doświadczenie zawodowe</h2>
          </div>
          <div className='description'>
            <p className='description__text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="title">
            <h2 className="title__title">Portfolio</h2>
          </div>
          <div className='urls'>
            <ul className='urls__list'>
              {portfolioUrls.map(item =>
                <li
                  key={item}
                  className='urls__list-item'
                >
                  <BsPaperclip className='urls__list-item-icon'/>
                  <a className='urls__list-item-link' href={item} target='_blank' rel="noreferrer" >{item}</a>
                </li>
              )}
            </ul>
          </div>
          <div className="title">
            <h2 className="title__title">Projekt w zespole Scrum</h2>
          </div>
          <div className='urls'>
            <ul className='urls__list'>
              {projectUrls.map(item =>
                <li
                  key={item}
                  className='urls__list-item'
                >
                  <BsPaperclip className='urls__list-item-icon'/>
                  <a className='urls__list-item-link' href={item} target='_blank' rel="noreferrer" >{item}</a>
                </li>
              )}
            </ul>
          </div>
          <div className="title">
            <h2 className="title__title">Projekt na zaliczenie</h2>
          </div>
          <div className='urls'>
            <ul className='urls__list'>
              {bonusProjectUrls.map(item =>
                <li
                  key={item}
                  className='urls__list-item'
                >
                  <BsPaperclip className='urls__list-item-icon'/>
                  <a className='urls__list-item-link' href={item} target='_blank' rel="noreferrer" >{item}</a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
