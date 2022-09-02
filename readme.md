### Maria DB


#### table
```
CREATE TABLE t_user(
    userid varchar(20) NOT NULL,
    password varchar(20) NOT NULL,
    name VARCHAR(50) NOT NULL,
    name2 VARCHAR(50) NULL,
    regdt DATE NOT NULL DEFAULT now(),
    regUid varchar(10) NOT NULL DEFAULT '__sys__',
    moddt DATE NULL,
    modUid varchar(20) NULL,
    PRIMARY KEY (userid)
);


CREATE TABLE t_userImgURL(
    seq INT NOT NULL AUTO_INCREMENT,
    userid varchar(20) NOT NULL,
    imgURL varchar(50) NULL,
    sortNo int NOT NULL default 999999999,
    regdt DATE NOT NULL DEFAULT now(),
    regUid varchar(10) NOT NULL DEFAULT '__sys__',
    moddt DATE NULL,
    modUid varchar(20) NULL,
    PRIMARY KEY (seq)
);


CREATE TABLE t_userURL(
    userid varchar(20) NOT NULL,
    instagramURL varchar(50) NULL,
    imgURL varchar(50) NULL,
    img256URL varchar(50) NULL,
    img512URL varchar(50) NULL,
    img1024URL varchar(50) NULL,
    img1200URL varchar(50) NULL,

    regdt DATE NOT NULL DEFAULT now(),
    regUid varchar(10) NOT NULL DEFAULT '__sys__',
    moddt DATE NULL,
    modUid varchar(20) NULL,
    PRIMARY KEY (userid)
);



CREATE TABLE t_profileCategory(
    seq INT NOT NULL AUTO_INCREMENT,
    userid varchar(20) NOT NULL,
    name varchar(50) NOT NULL,
    sortNo int NOT NULL default 999999999,
    regdt DATE NOT NULL DEFAULT now(),
    regUid varchar(10) NOT NULL DEFAULT '__sys__',
    moddt DATE NULL,
    modUid varchar(20) NULL,
    PRIMARY KEY (seq)
);


CREATE TABLE t_profile(
    seq INT NOT NULL AUTO_INCREMENT,
    userid varchar(20) NOT NULL,
    profileCategorySeq int NOT NULL,
    Year varchar(20) NOT NULL,
    Name varchar(50) NOT NULL,
    Cast varchar(50) NULL,
    sortNo int NOT NULL default 999999999,
    regdt DATE NOT NULL DEFAULT now(),
    regUid varchar(10) NOT NULL DEFAULT '__sys__',
    moddt DATE NULL,
    modUid varchar(20) NULL,
    PRIMARY KEY (seq)
);
```

#### procedure
```
create
    definer = hong@`%` procedure P_Profile(IN _userid varchar(20))
BEGIN
     DROP TEMPORARY TABLE IF EXISTS AAA;
     CREATE TEMPORARY TABLE AAA (
        profilecategorySortNo int NULL,
        SortNoInCategory int NOT NULL,
        SortNoInCategory_DESC int NOT NULL,
        userid varchar(20) NOT NULL,
        userName VARCHAR(50) NOT NULL,
        userName2 VARCHAR(50) NULL,
        instagramURL varchar(50) NULL,
        imgURL varchar(50) NULL,
        img256URL varchar(50) NULL,
        img512URL varchar(50) NULL,
        img1024URL varchar(50) NULL,
        img1200URL varchar(50) NULL,
        profileCategoryName varchar(50) NULL,
        profileYear varchar(20) NULL,
        profileName varchar(50) NULL,
        profileCast varchar(50) NULL,
        status char(1)
    );
    INSERT INTO AAA(
        profilecategorySortNo,
        SortNoInCategory,
        SortNoInCategory_DESC,
        userid,
        userName,
        userName2,
        instagramURL,
        imgURL,
        img256URL,
        img512URL,
        img1024URL,
        img1200URL,
        profileCategoryName,
        profileName,
        profileYear,
        profileCast,
        status
    )
    SELECT
        D.sortNo AS profilecategorySortNo,
        ROW_NUMBER() OVER(PARTITION BY D.Name ORDER BY C.sortNo desc) AS SortNoInCategory,
        ROW_NUMBER() OVER(PARTITION BY D.Name ORDER BY C.sortNo) AS SortNoInCategory_DESC,
        A.userid AS userid,
        IFNULL(A.name,'') AS userName,
        IFNULL(A.name2,'') AS userName2,
        IFNULL(B.instagramURL,'') AS instagramURL,
        IFNULL(B.imgURL,'') AS imgURL,
        IFNULL(B.img256URL,'') AS img256URL,
        IFNULL(B.img512URL,'') AS img512URL,
        IFNULL(B.img1024URL,'') AS img1024URL,
        IFNULL(B.img1200URL,'') AS img1200URL,
        IFNULL(D.name,'') AS profileCategoryName,
        IFNULL(C.name,'') AS profileName,
        IFNULL(C.year,'') AS profileYear,
        IFNULL(C.cast,'') AS profileCast,
        '' AS status
    FROM t_user A LEFT JOIN t_userurl B ON A.userid = B.userid
    LEFT JOIN t_profile C ON A.userid = C.userid
    LEFT JOIN t_profilecategory D ON C.profileCategorySeq = D.seq AND C.userid = D.userid
    WHERE A.userid = _userid
    AND ifNULL(_userid,'') <> ''
    ORDER BY D.sortNo
    ;
    
    UPDATE AAA SET
        status = 'S'
    WHERE sortNoInCategory = 1;
     
    UPDATE AAA SET
        status = 'E'
    WHERE sortNoInCategory_DESC = 1;
     
    UPDATE AAA SET
        status = 'B'
    WHERE sortNoInCategory = 1
    AND sortNoInCategory_DESC = 1;
     
    SELECT*FROM AAA 
    ORDER BY profilecategorySortNo, SortNoInCategory;
     
     SELECT IFNULL(imgURL,'') AS imgURL FROM T_userImgURL
     WHERE userid = _userid
     order by sortNo;
END;


create
    definer = hong@`%` procedure P_menu()
BEGIN
    SELECT
        A.userid AS userid,
        IFNULL(A.name,'') AS userName
    FROM t_user A
    order by A.sortNo;
END;
```