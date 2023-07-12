import React, { useState } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'
import styles from '../styles/WeaponShop.module.css';
import App from './_app';
import header from './_app';

const weapons = [
  {
    id: 1,
    name: 'クラシック',
    description:'値段:無料\nマガジン弾数:12     ダメージ：頭 78     胴 26  手足 18',
    image:'https://appmedia.jp/wp-content/themes/appmedia/lib/valorant/images/weapon/icon/200001.webp',
  },
  {
    id: 2,
    name: 'ショーティー',
    description:'値段:300\nマガジン弾数:12     ダメージ：頭 22     胴 11  手足 9',
    image: 'https://appmedia.jp/wp-content/themes/appmedia/lib/valorant/images/weapon/icon/200002.webp',
  },
  {
    id: 3,
    name: 'フレンジー',
    description:'値段:450\nマガジン弾数:12     ダメージ：頭 78     胴 26  手足 18',
    image: 'https://appmedia.jp/wp-content/themes/appmedia/lib/valorant/images/weapon/icon/200003.webp',
  },
    {
    id: 4,
    name: 'ゴースト',
    description:'値段:500\nマガジン弾数:12     ダメージ：頭 105     胴 30  手足 25',
    image: 'https://appmedia.jp/wp-content/themes/appmedia/lib/valorant/images/weapon/icon/200004.webp',
  },
  {
    id: 5,
    name: 'シェリフ',
    description:'値段:800\nマガジン弾数:12     ダメージ：頭 159     胴 55  手足 50',
    image: 'https://appmedia.jp/wp-content/themes/appmedia/lib/valorant/images/weapon/icon/200005.webp',
  },
  {
    id: 6,
    name: 'スティンガー',
    description:'値段:1150\nマガジン弾数:12     ダメージ：頭 78     胴 26  手足 18',
    image: 'https://appmedia.jp/wp-content/themes/appmedia/lib/valorant/images/weapon/icon/200006.webp',
  },
    {
    id: 7,
    name: 'スペクター',
    description:'値段:1600\nマガジン弾数:12     ダメージ：頭 78     胴 26  手足 18',
    image: 'https://appmedia.jp/wp-content/themes/appmedia/lib/valorant/images/weapon/icon/200007.webp',
  },
  {
    id: 8,
    name: 'バッキー',
    description:'値段:850\nマガジン弾数:12     ダメージ：頭 78     胴 26  手足 18',
    image: 'https://appmedia.jp/wp-content/themes/appmedia/lib/valorant/images/weapon/icon/200008.webp',
  },
  {
    id: 9,
    name: 'ジャッジ',
    description:'値段:1850\nマガジン弾数:12     ダメージ：頭 78     胴 26  手足 18',
    image: 'https://appmedia.jp/wp-content/themes/appmedia/lib/valorant/images/weapon/icon/200009.webp',
  },
    {
    id: 10,
    name: 'ブルドッグ',
    description:'値段:2050\nマガジン弾数:12     ダメージ：頭 115     胴 35  手足 30',
    image: 'https://appmedia.jp/wp-content/themes/appmedia/lib/valorant/images/weapon/icon/200010.webp',
  },
  {
    id: 11,
    name: 'ガーディアン',
    description:'値段:2250\nマガジン弾数:12     ダメージ：頭 195     胴 65  手足 55',
    image: 'https://appmedia.jp/wp-content/themes/appmedia/lib/valorant/images/weapon/icon/200011.webp',
  },
  {
    id: 12,
    name: 'ヴァンダル',
    description:'値段:2900\nマガジン弾数:12     ダメージ：頭 160     胴 40  手足 34',
    image: 'https://appmedia.jp/wp-content/themes/appmedia/lib/valorant/images/weapon/icon/200012.webp',
  },
    {
    id: 13,
    name: 'ファントム',
    description:'値段:2900\nマガジン弾数:12     ダメージ：頭 156     胴 35  手足 30',
    image: 'https://appmedia.jp/wp-content/themes/appmedia/lib/valorant/images/weapon/icon/200013.webp',
  },
  {
    id: 14,
    name: 'マーシャル',
    description:'値段:950\nマガジン弾数:12     ダメージ：頭 202     胴 101',
    image: 'https://appmedia.jp/wp-content/themes/appmedia/lib/valorant/images/weapon/icon/200014.webp',
  },
  {
    id: 15,
    name: 'オペレーター',
    description:'値段:4700\nマガジン弾数:12     ダメージ：頭 255     胴 150  手足 120',
    image: 'https://appmedia.jp/wp-content/themes/appmedia/lib/valorant/images/weapon/icon/200015.webp',
  },
    {
    id: 16,
    name: 'アレス',
    description:'値段:1600\nマガジン弾数:12     ダメージ：頭 78     胴 26  手足 18',
    image: 'https://appmedia.jp/wp-content/themes/appmedia/lib/valorant/images/weapon/icon/200016.webp',
  },
  {
    id: 17,
    name: 'オーディン',
    description:'値段:3200\nマガジン弾数:12     ダメージ：頭 78     胴 26  手足 18',
    image: 'https://appmedia.jp/wp-content/themes/appmedia/lib/valorant/images/weapon/icon/200017.webp',
  },
];

const WeaponShop = () => {
  const [selectedWeapon, setSelectedWeapon] = useState(null);

  const handleWeaponClick = (weapon) => {
    setSelectedWeapon(weapon);
  };

  const handleModalClose = () => {
    setSelectedWeapon(null);
  };

  return (
    <>
      <title>Varolant Weapons Site</title>
      <div className={styles.body}>
        <h1  className={styles.title}>Varolant Weapons</h1>
        <div className={styles.container} >
      {weapons.map((weapon) => (
        <div
          key={weapon.id}
          className={styles.card}
          onClick={() => handleWeaponClick(weapon)}
        >
          <img src={weapon.image} alt={weapon.name} />
          <h3>{weapon.name}</h3>
        </div>
      ))}
      {selectedWeapon && (
          <div className={styles.modal}>
              <button className={styles.closeButton} onClick={handleModalClose}>
              ×
              </button>
            <div className={styles.modalContent}>
              <img src={selectedWeapon.image} alt={selectedWeapon.name} />
              <h3>{selectedWeapon.name}</h3>
              <p>{selectedWeapon.description}</p>
            </div>
        </div>
      )}
        </div>
        <footer className={styles.footer}>
          <p>copyright©kawashima</p>
        </footer>
        </div>
      </>
  );
};

export default WeaponShop;
