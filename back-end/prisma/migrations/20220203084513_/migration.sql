-- CreateTable
CREATE TABLE `pictures` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `trek_id` INTEGER NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `pic_link` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `treks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `country` VARCHAR(255) NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `difficulty` INTEGER NOT NULL,
    `time` INTEGER NOT NULL,
    `time_details` VARCHAR(255) NOT NULL,
    `drop` INTEGER NOT NULL,
    `descrption` VARCHAR(255) NOT NULL,
    `cover_pic` VARCHAR(255) NOT NULL,
    `map_pic` VARCHAR(255) NOT NULL,
    `visio_rando_link` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
